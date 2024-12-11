import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  `max-w-6xl w-full flex-col flex mx-auto font-poppins`,
]);

export const LayoutResult = twx.div((props) => [
  `flex flex-col lg:flex-row max-w-6xl w-full`,
]);

export const LayoutResultWithFilters = twx.div((props) => [
  `max-w-6xl w-full h-full flex flex-col py-6 gap-y-8 gap-x-4 px-4 mx-auto font-poppins`,
]);
