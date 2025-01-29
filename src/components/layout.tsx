import { twx } from "@/lib/twx";

export const LayoutResult = twx.div((props) => [
  `flex flex-col lg:flex-row max-w-6xl w-full`,
]);

export const LayoutResultWithFilters = twx.div((props) => [
  `max-w-6xl w-full h-full flex flex-col py-6 gap-y-3 gap-x-4 px-4 mx-auto font-poppins`,
]);

export const FormFilters = twx.form((props) => [
  `justify-between mx-auto mt-10 py-5 px-10 lg:px-30 flex flex-col space-y-8 lg:flex-row`,
]);
