"use client"

import { useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import useTaskStore from '@/stores/reviewStore';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../../ui/button"
import axios from "axios";
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
    (updatedReview) =>
      axios.put(`http://moleraj.local/backend/update-review.php?id=${updatedReview.id}`, updatedReview),
    {
      // After the mutation is successful, invalidate the query to refetch data
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );

  const handleDeleteRow = () => {
    if (window.confirm("Da li ste sigurni da hocete da izbrisete ovaj komentar?")) {
      // Make an API call to delete the row by ID
      fetch(`http://moleraj.local/backend/review.php?id=${row.original.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setTasks(tasks.filter((task) => task.id !== row.original.id));
            setIsDeleted(true);
          } else {
            alert("Row deletion failed.");
          }
        })
        .catch((error) => {
          console.error("Error deleting row:", error);
        });
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

    // Close the modal
    setIsEditModalOpen(false);
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
          <DropdownMenuItem>Postuj</DropdownMenuItem>
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