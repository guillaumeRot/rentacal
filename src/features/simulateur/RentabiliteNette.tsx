import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteNetteProps = {
  rentabiliteNette?: number;
};

export const RentabiliteNette = (props: RentabiliteNetteProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="rounded-3xl lg:w-2/4 max-h-40">
        <CardHeader>
          <CardTitle>Rentabilité Nette</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-2xl lg:text-4xl font-extrabold text-secondary-foreground">
          <div className="flex">
            <PourcentageFormat
              value={props.rentabiliteNette}
              className="w-3/4"
            />
            <IoWalletOutline />
          </div>
          <DialogTrigger asChild>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              className="text-xs text-black underline"
            >
              Plus de détails...
            </Link>
          </DialogTrigger>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-[425px] p-4">
        <h2 className="text-lg font-bold">Rentabilité nette</h2>
        <p>Règle de calcul:</p>
        <p>
          R = (loyers annuel - frais notaires - impots foncier - charges copro)
          / prix achat
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-4 px-4 py-2 bg-gray-300 rounded"
        >
          Fermer
        </button>
      </DialogContent>
    </Dialog>
  );
};
