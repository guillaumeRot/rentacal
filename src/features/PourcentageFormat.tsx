import { NumericFormat } from "react-number-format";

export type PourcentageFormatProps = {
  value?: number;
  className?: string;
};

export const PourcentageFormat = (props: PourcentageFormatProps) => {
  return (
    <NumericFormat
      className={props.className}
      value={props.value != 0 ? props.value : "-"}
      decimalSeparator=","
      decimalScale={2}
      suffix={" %"}
      thousandSeparator=" "
      displayType="text"
      fixedDecimalScale
    />
  );
};
