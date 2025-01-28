import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  `max-w-5xl w-full flex-col pb-6 flex gap-4 mx-auto px-4 font-poppins`,
]);

export const LayoutResult = twx.div((props) => [
  `flex flex-col lg:flex-row max-w-6xl w-full`,
]);

export const LayoutResultWithFilters = twx.div((props) => [
  `max-w-6xl w-full h-full flex flex-col py-6 gap-y-3 gap-x-4 px-4 mx-auto font-poppins`,
]);
