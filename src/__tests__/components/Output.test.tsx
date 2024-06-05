import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Output } from "../../components";
import { MISSING_END_CHAR } from "../../constants";
import { matriceTestData } from "../../matrice";

describe(Output, () => {
  it("should show error", () => {
    const { getByTestId } = render(<Output error={MISSING_END_CHAR} />);
    const errorResult = getByTestId("error-result").textContent;

    expect(errorResult).toBe(MISSING_END_CHAR);
  });

  it("should show letters", () => {
    const TEST_LETTERS = matriceTestData.matrix1.result.letters;
    const { getByTestId } = render(<Output letters={TEST_LETTERS} />);
    const lettersResult = getByTestId("letters-result").textContent;

    expect(lettersResult).toBe(TEST_LETTERS);
  });

  it("should show path", () => {
    const TEST_PATH = matriceTestData.matrix1.result.path;
    const { getByTestId } = render(<Output path={TEST_PATH} />);
    const pathResult = getByTestId("path-result").textContent;

    expect(pathResult).toBe(TEST_PATH);
  });
});
