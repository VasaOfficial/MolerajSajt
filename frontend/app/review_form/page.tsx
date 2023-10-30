'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Alert from 'components/Alert';
import { Button } from 'components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import supabase from 'utils/supabaseClient';
import * as z from 'zod';

type FormData = {
  name: string;
  feedback: string;
};

const FormSchema = z.object({
  name: z.string().min(1).max(15),
  feedback: z.string().min(1).max(100),
});

export default function ReviewForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase.from('review').upsert([
        {
          name: data.name,
          feedback: data.feedback,
          status: 'pending',
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      {isSubmitted && <Alert />}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-36 flex flex-col items-center justify-center gap-10 rounded-md bg-slate-200 p-16 font-semibold">
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
          <Button
            type="submit"
            className="rounded bg-blue-700 px-8 py-4 text-xl text-white"
          >
            Posalji
          </Button>
        </div>
      </form>
    </Form>
  );
}
