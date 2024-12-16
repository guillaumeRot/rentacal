import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer>
      <div className="custom-screen pt-16">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p className="text-gray-600">Réalisé par Guillaume Rot</p>
          <p className="text-gray-600">
            <Link href="/privacy" className="hover:underline">
              Mentions légales
            </Link>
            &nbsp;- &copy; {new Date().getFullYear()} Rentacal | Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
