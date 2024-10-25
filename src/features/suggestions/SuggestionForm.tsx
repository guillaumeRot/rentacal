"use client";

import { LayoutResult } from "@/components/layout";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SuggestionSchema } from "./suggestion.schema";

// export type SuggestionFormProps = {
//   onSubmit: (values: DataType) => void;
//   filterValues: DataType;
// };

// export const SimulationResult = () => {
//   const queryClient = useQueryClient();

// const [filtersValues, setFiltersValues] = useState({
//   prixAchat: 100000,
//   dureePret: 15,
//   tauxPret: 1,
//   loyersTotal: 500,
//   fraisNotaire: 0,
//   montantTravaux: 0,
//   impotsFoncier: 0,
//   chargesCopro: 0,
// }); // Initialise le state

// const result = useQuery({
//   queryKey: ["result"],
//   queryFn: async () => {
//     const res = await calculRentabilite({
//       prixAchat: filtersValues.prixAchat,
//       dureePret: filtersValues.dureePret,
//       tauxPret: filtersValues.tauxPret,
//       loyersTotal: filtersValues.loyersTotal,
//       fraisNotaire: filtersValues.fraisNotaire,
//       montantTravaux: filtersValues.montantTravaux,
//       impotsFoncier: filtersValues.impotsFoncier,
//       chargesCopro: filtersValues.chargesCopro,
//     });

//     const r = res?.data;
//     return r;
//   },
//   enabled: !!filtersValues,
// });

// const handleFormSubmit = async (values: DataType) => {
//   await mutation.mutateAsync(values);
// };

// const mutation = useMutation({
//   mutationFn: async (values: DataType) => {
//     setFiltersValues(values);
//   },
//   onSuccess: () => {
//     queryClient.invalidateQueries();
//   },
// });
export function SuggestionForm() {
  // {
  // onSubmit,
  // filterValues,
  // }: SuggestionFormProps
  const form = useForm<z.infer<typeof SuggestionSchema>>({
    resolver: zodResolver(SuggestionSchema),
    defaultValues: {
      email: "",
      suggestion: "",
    },
  });

  return (
    <LayoutResult>
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(async (values: SuggestionType) => {
          //   onSubmit(values);
          // })}
          onSubmit={async (values) => {
            console.log("TEST GUI");
            // await mutation.mutateAsync(values);
          }}
          className="w-2/3 space-y-6 mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="flex">
                  <FormControl>
                    {/* <MontantInputMask {...field} /> */}
                    <Input
                      placeholder="exemple@rentacal.fr"
                      {...field}
                      className="mr-2"
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="suggestion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suggestion</FormLabel>
                <div className="flex">
                  <FormControl>
                    {/* <MontantInputMask {...field} /> */}
                    <Textarea
                      placeholder="Ecrivez votre suggestion ici..."
                      {...field}
                      className="mr-2"
                      onChange={(event) => field.onChange(event.target.value)}
                      rows={10}
                    />
                    {/* <Input
                      placeholder="Ecrivez votre suggestion ici..."
                      {...field}
                      className="mr-2"
                      onChange={(event) => field.onChange(event.target.value)}
                    /> */}
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground"
          >
            Envoyer ma suggestion
          </Button>
        </form>
      </Form>
    </LayoutResult>
  );
}
