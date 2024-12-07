import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { MathJax } from "better-react-mathjax";
import Link from "next/link";
import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteNetteProps = {
  rentabiliteNette?: number;
};

export const RentabiliteNette = (props: RentabiliteNetteProps) => {
  const [open, setOpen] = useState(false);

  let color = "#22C55E";
  if ((props.rentabiliteNette ?? 0) < 4) {
    color = "#DC2626";
  } else if ((props.rentabiliteNette ?? 0) < 7) {
    color = "#F59E0B";
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card
        className="rounded-3xl lg:w-2/4 max-h-36"
        style={{ borderColor: `${color}`, color: `${color}` }}
      >
        <CardHeader className="relative">
          <CardTitle>Rentabilité nette</CardTitle>
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
        <CardContent className="grid gap-4 text-2xl lg:text-4xl font-bold">
          <div className="flex">
            <PourcentageFormat
              value={props.rentabiliteNette}
              className="w-3/4"
            />
            {/* <IoWalletOutline /> */}
          </div>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-[425px] p-4 text-justify">
        <DialogTitle className="text-lg font-bold">
          Rentabilité nette
        </DialogTitle>
        <p>
          La rentabilité nette d’un investissement immobilier locatif prend en
          compte non seulement les revenus locatifs, mais aussi les charges et
          les frais associés à la gestion du bien. Voici la formule :
        </p>
        <MathJax className="text-xl mx-auto">
          {
            "\\( \\text{R} = \\frac{(\\text{Loyer annuel} - \\text{Charges annuelles}) \\times 100}{\\text{Prix d'achat du bien + Frais d'acquisition}} \\)"
          }
        </MathJax>

        <p>Où :</p>
        <ul className="list-disc pl-4 pt-2">
          <li>Loyer annuel : le total des loyers perçus sur une année.</li>
          <li>
            Charges annuelles : toutes les charges déductibles, comme les
            charges de copropriété, les frais de gestion locative, les
            assurances, les impôts fonciers, et les coûts d’entretien.
          </li>
          <li>
            Prix d'achat du bien + Frais d'acquisition : le coût d’acquisition
            total, incluant le prix d’achat, les frais de notaire, et les
            éventuels frais d’agence.
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
