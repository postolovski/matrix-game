import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import App from "../../App";
import { matriceTestData } from "../../matrice";

describe(App, () => {
  it("should test matrix1", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix1;
    const { letters, path } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const lettersResult = getByTestId("letters-result").textContent;
    const pathResult = getByTestId("path-result").textContent;
    const errorResult = queryByTestId("error-result");

    expect(lettersResult).toBe(letters);
    expect(pathResult).toBe(path);
    expect(errorResult).toBeFalsy();
  });

  it("should test matrix2", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix2;
    const { letters, path } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const lettersResult = getByTestId("letters-result").textContent;
    const pathResult = getByTestId("path-result").textContent;
    const errorResult = queryByTestId("error-result");

    expect(lettersResult).toBe(letters);
    expect(pathResult).toBe(path);
    expect(errorResult).toBeFalsy();
  });

  it("should test matrix3", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix3;
    const { letters, path } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const lettersResult = getByTestId("letters-result").textContent;
    const pathResult = getByTestId("path-result").textContent;
    const errorResult = queryByTestId("error-result");

    expect(lettersResult).toBe(letters);
    expect(pathResult).toBe(path);
    expect(errorResult).toBeFalsy();
  });

  it("should test matrix4", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix4;
    const { letters, path } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const lettersResult = getByTestId("letters-result").textContent;
    const pathResult = getByTestId("path-result").textContent;
    const errorResult = queryByTestId("error-result");

    expect(lettersResult).toBe(letters);
    expect(pathResult).toBe(path);
    expect(errorResult).toBeFalsy();
  });

  it("should test matrix5", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix5;
    const { letters, path } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const lettersResult = getByTestId("letters-result").textContent;
    const pathResult = getByTestId("path-result").textContent;
    const errorResult = queryByTestId("error-result");

    expect(lettersResult).toBe(letters);
    expect(pathResult).toBe(path);
    expect(errorResult).toBeFalsy();
  });

  it("should test matrix6", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix6;
    const { letters, path } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });
    const lettersResult = getByTestId("letters-result").textContent;
    const pathResult = getByTestId("path-result").textContent;
    const errorResult = queryByTestId("error-result");

    expect(lettersResult).toBe(letters);
    expect(pathResult).toBe(path);
    expect(errorResult).toBeFalsy();
  });

  it("should test matrix7", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix7;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix8", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix8;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix9", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix9;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix10", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix10;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix11", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix11;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix12", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix12;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix13", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix13;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix14", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix14;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });

  it("should test matrix15", async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const textArea = getByTestId("text-area");

    const { matrix, result } = matriceTestData.matrix15;
    const { error } = result;

    const value = JSON.stringify(matrix);
    await fireEvent.change(textArea, { target: { value: value } });

    const errorResult = getByTestId("error-result").textContent;
    const lettersResult = queryByTestId("letters-result");
    const pathResult = queryByTestId("path-result");

    expect(errorResult).toBe(error);
    expect(lettersResult).toBeFalsy();
    expect(pathResult).toBeFalsy();
  });
});
