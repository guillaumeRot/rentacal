import { NumericFormat } from "react-number-format";

export type MontantFormatProps = {
  value?: number;
  className?: string;
};

export const MontantFormat = (props: MontantFormatProps) => {
  return (
    <NumericFormat
      className={props.className}
      value={props.value}
      decimalSeparator=","
      decimalScale={2}
      suffix={" €"}
      thousandSeparator=" "
      displayType="text"
      fixedDecimalScale
    />
  );
};
