"use client"

import { useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import useTaskStore from '@/stores/reviewStore';
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

interface DataTableRowActionsProps<TData extends { id: number }> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends { id: number }>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isDeleted, setIsDeleted] = useState(false)
  const { tasks, setTasks } = useTaskStore();

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
            console.log("Updated data:", tasks);
          } else {
            alert("Row deletion failed.");
          }
        })
        .catch((error) => {
          console.error("Error deleting row:", error);
        });
    }
  };

  return (
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
        <DropdownMenuItem>Procitaj</DropdownMenuItem>
        <DropdownMenuItem>Izmeni</DropdownMenuItem>
        <DropdownMenuItem>Postuj</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteRow}>Izbrisi </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}