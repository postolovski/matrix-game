import { useState } from "react";
import "./App.css";
import { Input, Output } from "./components";
import { pathfinder } from "./engine";
import { valudateInput } from "./helpers";
import { Matrix, Maybe } from "./types";

function App() {
  const [letters, setLetters] = useState<Maybe<string>>();
  const [path, setPath] = useState<Maybe<string>>();
  const [error, setError] = useState<Maybe<string>>();

  const clearStates = () => {
    setError(null);
    setPath(null);
    setLetters(null);
  };

  const onChange = (value: string) => {
    clearStates();
    const { matrix, error: inputValidationError } = valudateInput(value);

    if (inputValidationError) {
      setError(inputValidationError);
      return;
    }

    const { letters, path, error } = pathfinder(matrix as Matrix);

    setLetters(letters);
    setPath(path);
    setError(error);
  };

  return (
    <>
      <Input onChange={onChange} error={Boolean(error)} />
      <Output letters={letters} path={path} error={error} />
    </>
  );
}

export default App;
