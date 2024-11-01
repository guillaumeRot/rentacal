import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteNetteProps = {
  rentabiliteNette?: number;
};

export const RentabiliteNette = (props: RentabiliteNetteProps) => {
  const [open, setOpen] = useState(false);

  let bgColor = "#22C55E";
  if ((props.rentabiliteNette ?? 0) < 4) {
    bgColor = "#DC2626";
  } else if ((props.rentabiliteNette ?? 0) < 7) {
    bgColor = "#F59E0B";
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card
        className="rounded-3xl lg:w-2/4 max-h-36 text-white"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <CardHeader className="relative">
          <CardTitle className="text-black">Rentabilité nette</CardTitle>
          <DialogTrigger asChild>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              <BsQuestionCircleFill
                size={25}
                className="absolute top-6 right-6"
              />
            </Link>
          </DialogTrigger>
        </CardHeader>
        <CardContent className="grid gap-4 text-2xl lg:text-4xl font-semibold">
          <div className="flex">
            <PourcentageFormat
              value={props.rentabiliteNette}
              className="w-3/4"
            />
            <IoWalletOutline />
          </div>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-[425px] p-4">
        <h2 className="text-lg font-bold">Rentabilité nette</h2>
        <p>Règle de calcul:</p>
        <p>
          R = (loyers annuel - frais notaires - impots foncier - charges copro)
          x 100 / prix achat
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
