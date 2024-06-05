import { INVALID_INPUT } from "../constants";
import { Matrix, ValidateInput } from "../types";

const isOneItemMatrix = (value: string): Matrix | null => {
  try {
    const newArr = JSON.parse(value);

    return newArr;
  } catch (e) {
    return null;
  }
};

const prepareMatrixToProperFormat = (newMatrix: string[]): Matrix => {
  const matrix: Matrix = [];

  newMatrix.map((item) => {
    let newItem = item.trim().replace("/", "");
    const lastCharacter = newItem[newItem.length - 1];

    if (lastCharacter === ",") {
      newItem = newItem.slice(0, -1);
    }
    const paredItem = JSON.parse(newItem);
    matrix.push(paredItem);
  });

  return matrix;
};

export const valudateInput = (value: string): ValidateInput => {
  try {
    const oneItemMatrix = isOneItemMatrix(value);
    if (oneItemMatrix) return { matrix: oneItemMatrix };

    const enteredPotentialMatrix = value.trim().split("\n");
    // Remove first and last item since they are brackets
    enteredPotentialMatrix.shift();
    enteredPotentialMatrix.pop();

    const matrix = prepareMatrixToProperFormat(enteredPotentialMatrix);

    return { matrix };
  } catch (e) {
    return {
      error: INVALID_INPUT,
    };
  }
};
