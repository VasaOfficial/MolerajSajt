"use client"

import { useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import useTaskStore from 'stores/reviewStore';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "utils/supabaseClient";
import { Button } from "../../ui/button"
import { EditReview } from "../EditReview";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"

type Review = {
  id: number;
  name: string;
  feedback: string;
  rating: number;
};

interface DataTableRowActionsProps<TData extends { id: number; name: string; feedback: string; rating: number }> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends { id: number; name: string; feedback: string; rating: number }>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isDeleted, setIsDeleted] = useState(false)
  const { tasks, setTasks } = useTaskStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const queryClient = useQueryClient()
  const queryKey = ['reviews'];

 // Define the mutation to update the review
 const { mutate: updateReview } = useMutation<void, unknown, Review>(
  async (updatedReview) => {
    const { error } = await supabase
      .from('review')
      .update(updatedReview)
      .eq('id', updatedReview.id);

    if (error) {
      console.error('Error updating review:', error);
      throw new Error('Error updating review');
    }
  },
  {
    // After the mutation is successful, invalidate the query to refetch data
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  }
);

const handleDeleteRow = async () => {
  if (window.confirm('Da li ste sigurni da hocete da izbrisete ovaj komentar?')) {
    const { data, error } = await supabase
      .from('review')
      .delete()
      .eq('id', row.original.id);

    if (error) {
      console.error('Error deleting review:', error);
      alert('Row deletion failed.');
    } else {
      setTasks(tasks.filter((task) => task.id !== row.original.id));
      setIsDeleted(true);
    }
  }
};

const handleEditRow = () => {
  setIsEditModalOpen(true);
};

const handleCloseEditModal = () => {
  setIsEditModalOpen(false);
};

const handleSaveReview = (updatedReview: Review) => {
  updateReview(updatedReview);

  setIsEditModalOpen(false);
};

const handleApproveReview = async () => {
  if (window.confirm('Da li ste sigurni da hocete da odobrite ovaj komentar?')) {
    const { data, error } = await supabase
      .from('review')
      .update({ status: 'done' })
      .eq('id', row.original.id);

    if (error) {
      console.error('Error approving review:', error);
      alert('Review approval failed.');
    } else {
      // Refresh the data by invalidating the query
      queryClient.invalidateQueries(queryKey);
    }
  }
};

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={handleEditRow}>Izmeni</DropdownMenuItem>
          <DropdownMenuItem onClick={handleApproveReview}>Postuj</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteRow}>Izbrisi </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isEditModalOpen && (
        <EditReview
          review={row.original}
          onSave={handleSaveReview}
          onCancel={handleCloseEditModal}
        />
      )}
    </div>
  )
}