import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-popover flex">
      <div className="mx-auto pb-3 pt-3">
        <Link href="/privacy" className="hover:underline">
          Mentions légales
        </Link>
        &nbsp;- &copy; {new Date().getFullYear()} RentaCal. Tous droits
        réservés.
      </div>
    </footer>
  );
};
