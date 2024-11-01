import { FaCircle } from "react-icons/fa6";

export const LegendeRentabilite = () => {
  // let bgColor = "#22C55E";
  // if ((props.rentabiliteBrute ?? 0) < 4) {
  //   bgColor = "#DC2626";
  // } else if ((props.rentabiliteBrute ?? 0) < 7) {
  //   bgColor = "#F59E0B";
  // }

  return (
    <div
      id="legendeRentabilites"
      className="flex gap-y-8 gap-x-6 w-full flex-col lg:flex-row text-sm mt-3"
    >
      <span className="flex gap-x-2">
        <FaCircle size={18} color="#DC2626" />
        Rentabilité inférieure à 4%
      </span>
      <span className="flex gap-x-2">
        <FaCircle size={18} color="#F59E0B" />
        Rentabilité entre 4% et 7%
      </span>
      <span className="flex gap-x-2">
        <FaCircle size={18} color="#22C55E" />
        Rentabilité supérieure à 7%
      </span>
    </div>
  );
};
