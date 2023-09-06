'use client'

import { useEffect } from "react";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import useTaskStore from '@/stores/reviewStore';

export default function TaskPage() {
  const { tasks, setTasks } = useTaskStore();
  
  useEffect(() => {
    // Fetch data from your PHP API endpoint
    fetch("http://moleraj.local/backend/review.php")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response contains an array of reviews
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [tasks]);

  return (
    <>
      <div className="hidden mt-20 h-full w-9/12 flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Admin Interface</h2>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
