import {
    CheckCircledIcon,
    CrossCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const statuses = [
    {
      value: "pending",
      label: "Pending",
      icon: StopwatchIcon,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon,
    },
    {
      value: "removed",
      label: "Removed",
      icon: CrossCircledIcon,
    },
  ]