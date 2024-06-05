import { ChangeEvent, FC } from "react";
import "./Input.css";
const titleAndPLaceholder = "Enter Matrix";

type Props = {
  onChange: (value: string) => void;
  error?: boolean;
};

export const Input: FC<Props> = ({ onChange, error }) => {
  const prepareInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    onChange(value);
  };

  const classes = error ? "text-area error" : "text-area";

  return (
    <textarea
      className={classes}
      title={titleAndPLaceholder}
      placeholder={titleAndPLaceholder}
      rows={20}
      cols={100}
      onChange={prepareInput}
      data-testid="text-area"
    />
  );
};
