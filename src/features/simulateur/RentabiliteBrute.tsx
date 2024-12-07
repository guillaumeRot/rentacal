import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { MathJax } from "better-react-mathjax";
import Link from "next/link";
import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteBruteProps = {
  rentabiliteBrute?: number;
};

export const RentabiliteBrute = (props: RentabiliteBruteProps) => {
  const [open, setOpen] = useState(false);

  let color = "#22C55E";
  if ((props.rentabiliteBrute ?? 0) < 4) {
    color = "#DC2626";
  } else if ((props.rentabiliteBrute ?? 0) < 7) {
    color = "#F59E0B";
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card
        className="rounded-3xl lg:w-2/4 max-h-36"
        style={{ borderColor: `${color}`, color: `${color}` }}
      >
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
                size={25}
                className="absolute top-6 right-6"
              />
            </Link>
          </DialogTrigger>
        </CardHeader>

        <CardContent className="gap-4 grid text-2xl lg:text-4xl font-bold">
          <div className="flex">
            <PourcentageFormat
              value={props.rentabiliteBrute}
              className="w-3/4"
            />
            {/* <IoTrendingUpOutline /> */}
          </div>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-[425px] p-4 text-justify">
        <DialogTitle className="text-lg font-bold">
          Rentabilité brute
        </DialogTitle>
        <p>
          La rentabilité brute d'un investissement immobilier locatif se calcule
          en pourcentage, et elle mesure le rendement annuel de l'investissement
          sans tenir compte des charges, impôts, et autres frais. La formule est
          la suivante :
        </p>
        <MathJax className="text-xl mx-auto">
          {
            "\\(\\text{R} = \\frac{\\text{Loyers annuels} \\times 100}{\\text{Prix d'achat}} \\)"
          }
        </MathJax>
        <p>Où :</p>
        <ul className="list-disc pl-4 pt-2">
          <li>Loyer annuel est la somme des loyers perçus sur une année.</li>
          <li>
            Prix d'achat du bien inclut le coût total d'acquisition, y compris
            les frais d'achat (comme les frais de notaire).
          </li>
        </ul>

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
