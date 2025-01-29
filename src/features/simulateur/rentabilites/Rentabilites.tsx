import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// interface FiltersProps {
//   onSubmit: (data: any) => void;
//   form: UseFormReturn<z.infer<typeof DataSchema>>;
// }

// export class Filters extends React.Component<FiltersProps> {
export class Rentabilites extends React.Component {
  // state = {
  //   currentStep: 0,
  //   formData: {
  //     step1: {},
  //     step2: {},
  //     step3: {},
  //   },
  // };

  // steps = [
  //   {
  //     title: "Achat",
  //     component: (
  //       <div>
  //         <h2 className="text-lg lg:text-xl text-center">
  //           Dépenses liées à l'achat
  //         </h2>
  //         <FormFilterAchat onChange={() => {}} form={this.props.form} />
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Revenus et dépenses",
  //     component: (
  //       <div>
  //         <h2 className="text-lg lg:text-xl text-center">
  //           Revenus et dépenses réguliers
  //         </h2>
  //         <FormFilterRevenusDepenses
  //           onChange={() => {}}
  //           form={this.props.form}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Travaux et mobilier",
  //     component: (
  //       <div>
  //         <h2 className="text-lg lg:text-xl text-center">
  //           Coût des travaux et du mobilier
  //         </h2>
  //         <FormFilterTravauxMobilier
  //           onChange={() => {}}
  //           form={this.props.form}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Emprunt",
  //     component: (
  //       <div>
  //         <h2 className="text-lg lg:text-xl text-center">
  //           Informations relatives au crédit
  //         </h2>
  //         <FormFilterFinancement onChange={() => {}} form={this.props.form} />
  //       </div>
  //     ),
  //   },
  // ];

  // setCurrentStep = (index: number) => {
  //   this.setState({ currentStep: index });
  // };

  render() {
    // const { currentStep } = this.state;

    return (
      <Card className="rounded-3xl w-full border-2 grid grid-cols-2">
        <Card className="rounded-3xl m-6 bg-green-200">
          <CardContent className="p-2">
            <div className="p-4">
              <h1>Rentabilité brute</h1>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl m-6 bg-red-200">
          <CardContent className="p-2">
            <div className="p-4">
              <h1>Rentabilité nette</h1>
            </div>
          </CardContent>
        </Card>
      </Card>
    );
  }
}
