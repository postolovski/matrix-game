import { FC } from "react";
import { Maybe } from "../../types";
import { Result } from "../Result";

type Props = {
  letters?: Maybe<string>;
  path?: Maybe<string>;
  error?: Maybe<string>;
};

export const Output: FC<Props> = ({ letters, path, error }) => {
  return (
    <div>
      {letters && (
        <Result title="Letters" data={letters} testId="letters-result" />
      )}
      {path && <Result title="Path" data={path} testId="path-result" />}
      {error && (
        <div className="error" data-testid="error-result">
          {error}
        </div>
      )}
    </div>
  );
};
