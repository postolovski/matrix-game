import { FC } from "react";
import "./Result.css";

type Props = {
  title: string;
  data: string;
  testId: string;
};

export const Result: FC<Props> = ({ title, data, testId }) => {
  return (
    <div className="grid">
      {title}:
      <div className="result" data-testid={testId}>
        {data}
      </div>
    </div>
  );
};
