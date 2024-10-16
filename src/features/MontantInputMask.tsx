import { NumericFormat } from "react-number-format";

export type MontantInputMaskProps = {
  value?: number;
  className?: string;
};

export const MontantInputMask = (props: MontantInputMaskProps) => {
  return (
    <NumericFormat
      className={props.className}
      value={props.value}
      decimalSeparator=","
      decimalScale={2}
      suffix={" €"}
      thousandSeparator=" "
      fixedDecimalScale
    />
  );
};
