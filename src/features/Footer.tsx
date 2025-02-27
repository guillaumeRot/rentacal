import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-popover flex font-poppins text-sm px-6">
      <div className="flex justify-between py-8 w-full">
        <div>
          <span>
            &copy; {new Date().getFullYear()} RentaCal. Tous droits réservés.
          </span>
        </div>
        <div>
          <Link href="/privacy" className="hover:underline">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};
