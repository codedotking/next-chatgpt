"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function InputBox() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative flex h-full max-w-full flex-1 flex-col">
              <div className="absolute bottom-full left-0 right-0 z-20"></div>
              <div className="flex w-full items-center">
                <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
                  <div className="flex items-end gap-1.5 md:gap-2">
                    <div className="flex min-w-0 flex-1 flex-col pl-4">
                      <FormControl>
                        <Textarea
                          className="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 minh-[40px] max-h-52"
                          placeholder="给“ChatGPT”发送消息"
                          //   height: 40px; overflow-y: hidden;
                          style={{ overflowY: "hidden", height: "40px" }}
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <Button
                      className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
                      type="submit">
                      S
                    </Button>
                  </div>
                </div>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
