"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoArrowForwardCircle } from "react-icons/io5";
import { z } from "zod";
import { AccessSchema, AccessType } from "../simulateur/simulateur.schema";
import { insertMail } from "./access.action";

export type AccessSectionProps = {
  defaultValues?: AccessType;
};

export const AccessSection = (props: AccessSectionProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof AccessSchema>>({
    resolver: zodResolver(AccessSchema),
    defaultValues: props.defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: AccessType) => {
      await insertMail(values);
    },
  });

  return (
    <div className="mx-auto w-fullw-1/2 px-8 py-4">
      <Link
        href={"/simulateur"}
        className="bg-accent text-accent-foreground mx-auto px-8 py-4 mt-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
      >
        Accéder au simulateur
        <IoArrowForwardCircle size={25} className="ml-3" />
      </Link>
    </div>
  );
};
