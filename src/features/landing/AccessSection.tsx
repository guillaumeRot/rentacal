"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IoArrowForwardCircle } from "react-icons/io5";
import { z } from "zod";
import { AccessSchema, AccessType } from "../simulateur/simulateur.schema";
import { insertMail } from "./access.action";

export type AccessSectionProps = {
  defaultValues?: AccessType;
};

export const AccessSection = (props: AccessSectionProps) => {
  const form = useForm<z.infer<typeof AccessSchema>>({
    resolver: zodResolver(AccessSchema),
    defaultValues: props.defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: AccessType) => {
      console.log("TEST GUI 2:", values);
      const res = await insertMail(values);
      // if (serverError || !data) {
      //   toast.error(serverError);
      //   return;
      // }
      // await queryClient.invalidateQueries();
    },
  });

  return (
    <div className="mx-auto w-1/2 px-8 py-4">
      <Form {...form}>
        <form
          //   onSubmit={async (values) => {
          //   await mutation.mutateAsync(values);
          // }}
          onSubmit={form.handleSubmit(async (values: AccessType) => {
            console.log("TEST GUI:", values);
            await mutation.mutateAsync(values);
            // onSubmit(values);
          })}
          // className="w-2/3 space-y-6 mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <div className="flex">
                  <FormControl>
                    {/* <MontantInputMask {...field} /> */}
                    <Input
                      placeholder=""
                      {...field}
                      // className="mr-2"
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-accent text-accent-foreground mx-auto px-8 py-6 mt-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
            // className="w-full bg-accent text-accent-foreground"
          >
            {/* <Link
            type="submit"
            href="/simulateur"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
          > */}
            Accéder au simulateur
            <IoArrowForwardCircle size={25} className="ml-3" />
            {/* </Link> */}
          </Button>
        </form>
      </Form>

      {/* <Link
        href="/simulateur"
        className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
      >
        Accéder au simulateur
        <IoArrowForwardCircle size={25} className="ml-3" />
      </Link> */}
    </div>
  );
};
