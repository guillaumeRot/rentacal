import { LoggedInButton } from "./auth/LoggedInButton";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export const Header = () => {
  return (
    <div>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="RentaCal" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <header className="w-full border-b border-border bg-popover flex">
        <SidebarTrigger />
        <div className="grid grid-cols-3 grow pb-3 pt-3 px-14 items-center">
          <h1 className="text-3xl font-poppins font-medium">Bonjour !</h1>
          <div className="justify-self-end grid items-center col-start-3">
            <LoggedInButton />
          </div>
        </div>
      </header>
    </div>
  );
};
