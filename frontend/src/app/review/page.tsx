"use client"

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rating } from '@/components/ui/Rating'
import { useReCaptcha, ReCaptchaProvider } from "next-recaptcha-v3";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Alert from '@/components/Alert';

const FormSchema = z.object({
  name: z.string().min(1).max(10),
  feedback: z.string().min(1).max(100),
});

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { executeRecaptcha } = useReCaptcha();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      const token = await executeRecaptcha("form_submit");
  
      const formData = {
        name: form.getValues("name"),
        feedback: form.getValues("feedback"),
        rating: rating,
        recaptchaToken: token,
      };
  
      const response = await axios.post('http://moleraj.local/backend/submit-feedback.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    },
    {
      onSuccess: () => {
        
        queryClient.invalidateQueries(['feedback']);
      },
    }
  );
  
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    mutation.mutateAsync(); // Trigger the mutation
    setIsSubmitted(true); 
  
    // Note: You can set setIsSubmitted here if you want to show the alert immediately after submission
  };

  return (
    <Form {...form}>
      {isSubmitted && (
            <Alert />
          )}
        <form onSubmit={form.handleSubmit(onSubmit)}>
      <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}>
        <div className="p-16 font-semibold flex flex-col justify-center items-center gap-10 bg-slate-200 rounded-md">
          <h1 className="text-2xl">Ostavite utisak</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ime</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 w-64"
                    type="name"
                    placeholder="Upisite vase ime..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Utisak</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-32 w-64"
                    placeholder="Ostavite vas utisak..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Rating rating={rating} setRating={setRating} />
          <Button type='submit' className="rounded bg-blue-700 py-4 px-8 text-xl text-white">Posalji</Button>
        </div>
      </ReCaptchaProvider>
      </form>
    </Form>
  );
}