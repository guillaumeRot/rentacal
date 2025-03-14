import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  `max-w-5xl w-full flex-col pb-6 flex gap-4 mx-auto px-4 font-poppins`,
]);

export const LayoutResultWithFilters = twx.div((props) => [
  `max-w-6xl w-full h-full flex flex-col py-6 gap-y-3 gap-x-4 px-2 lg:px-4 mx-auto font-poppins`,
]);

// export const FormFilters = twx.form((props) => [
//   `justify-between mx-auto my-5 lg:my-10 py-5 px-10 lg:px-30 flex flex-col space-y-8 lg:flex-row`,
// ]);

export const LayoutFilters = twx.div((props) => [
  `justify-between mx-auto my-5 lg:my-10 py-5 px-10 lg:px-30 flex flex-col space-y-8 lg:flex-row`,
]);
