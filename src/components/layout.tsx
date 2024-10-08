import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  `max-w-5xl w-full flex-col py-6 flex gap-4 mx-auto px-4`,
]);

export const LayoutTitle = twx.h1((props) => [`text-4xl font-bold`]);

export const LayoutDescription = twx.p((props) => [
  `text-lg text-muted-foreground`,
]);

export const CardLayout = twx.div((props) => [
  `border-2 rounded-xl p-12 w-2/4 min-w-96 mx-auto bg-popover`,
]);
