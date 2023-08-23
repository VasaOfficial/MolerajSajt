import {
    CheckCircledIcon,
    CrossCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const statuses = [
    {
      value: "in progress",
      label: "In Progress",
      icon: StopwatchIcon,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
    },
  ]