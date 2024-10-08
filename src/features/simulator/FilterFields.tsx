import { CardLayout } from "@/components/layout";
import { FormFilterFields } from "./FormFilterFields";

export const FilterFields = async () => {
  return (
    <div>
      {/* <CardLayout className="mb-4">
        <LoginCard />
      </CardLayout> */}
      <CardLayout>
        <FormFilterFields />
      </CardLayout>
    </div>
  );
};
