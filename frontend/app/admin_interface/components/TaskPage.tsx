'use client'

import { useEffect } from "react";
import { DataTable } from "./Table/data-table";
import { columns } from "./Table/columns";
import useTaskStore from 'stores/reviewStore';
import supabase from "utils/supabaseClient";

export default function TaskPage() {
  const { tasks, setTasks } = useTaskStore();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('review')
          .select('*')

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setTasks(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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