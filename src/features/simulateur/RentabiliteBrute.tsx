import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoTrendingUpOutline } from "react-icons/io5";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteBruteProps = {
  rentabiliteBrute?: number;
};

export const RentabiliteBrute = (props: RentabiliteBruteProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="rounded-3xl lg:w-2/4 max-h-36">
        <CardHeader className="relative">
          <CardTitle>Rentabilité brute</CardTitle>
          <DialogTrigger asChild>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              <BsQuestionCircleFill
                size={18}
                className="absolute top-6 right-6 text-blue-800"
              />
            </Link>
          </DialogTrigger>
        </CardHeader>

        <CardContent className="gap-4 grid text-2xl lg:text-4xl font-extrabold text-secondary-foreground">
          <div className="flex">
            <PourcentageFormat
              value={props.rentabiliteBrute}
              className="w-3/4"
            />
            <IoTrendingUpOutline />
          </div>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-[425px] p-4">
        <h2 className="text-lg font-bold">Rentabilité brute</h2>
        <p>Règle de calcul:</p>
        <p>R = loyers annuel x 100 / prix achat</p>

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
