import {
  MISSING_END_CHAR,
  MISSING_START_CHAR,
  MULTIPLE_STARTS,
  START_NOT_FOUND,
  endChar,
  startChar,
} from "../constants";

import {
  Direction,
  DirectionAndPosition,
  Matrix,
  Maybe,
  NeighboursValues,
  Position,
  StartOrEndChar,
  ValidMoves,
} from "../types";

import { detectDirection, findStart } from "./navigators";

const isValidMove = (matrix: Matrix, position: Position): Maybe<Position> => {
  const { row, col } = position;
  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length)
    return null;

  const cell = matrix[row][col];
  const validMove =
    cell === "-" ||
    cell === "|" ||
    cell === "+" ||
    isLetter(cell) ||
    cell === "X";
  return validMove ? position : null;
};

export const checkValidMoves = (
  matrix: Matrix,
  position: Position
): ValidMoves => {
  const { row, col } = position;
  const nextUp = { row: row - 1, col };
  const nextDown = { row: row + 1, col };
  const nextLeft = { row, col: col - 1 };
  const nextRight = { row, col: col + 1 };

  const up = isValidMove(matrix, nextUp);
  const down = isValidMove(matrix, nextDown);
  const left = isValidMove(matrix, nextLeft);
  const right = isValidMove(matrix, nextRight);

  return {
    up,
    down,
    left,
    right,
  };
};

export const isLetter = (char: string): boolean => /[A-Z]/.test(char);

export const collectLetters = (
  isVisited: boolean,
  currentChar: string,
  letters: string
): string => {
  const isInvalid =
    !isLetter(currentChar) || currentChar === endChar || isVisited;

  if (isInvalid) return letters;

  return letters + currentChar;
};

export const checkForMultipleStartingPoints = (
  values: NeighboursValues
): boolean => {
  const { leftChar, rightChar, upChar, downChar } = values;

  return (
    [leftChar, rightChar, upChar, downChar].filter((item) => Boolean(item))
      .length > 1
  );
};

export const checkIfPositionIsVisited = (
  visited: Position[],
  position: Position
): boolean => {
  const arr = [...visited];
  arr.pop();

  const isVisited = arr.some(
    (item) => item.row === position.row && item.col === position.col
  );
  return isVisited;
};

export const checkCharacterOccurances = (
  matrix: Matrix,
  char: StartOrEndChar
): number => {
  let counter: number = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === char) {
        counter++;
      }
    }
  }
  return counter;
};

export const matrixStructureValidation = (matrix: Matrix) => {
  const startCharOccurances = checkCharacterOccurances(matrix, startChar);

  if (!startCharOccurances) throw MISSING_START_CHAR;
  if (startCharOccurances > 1) throw MULTIPLE_STARTS;

  const endCharOccurances = checkCharacterOccurances(matrix, endChar);

  if (!endCharOccurances) throw MISSING_END_CHAR;
};

export const initialDirectionAndPositionValidator = (
  matrix: Matrix
): DirectionAndPosition => {
  const start = findStart(matrix);
  if (!start) throw START_NOT_FOUND;

  const direction = detectDirection(matrix, start);

  return {
    direction,
    position: start,
  };
};

export const isVerticalDirection = (direction: Direction): boolean =>
  direction === "Down" || direction === "Up";

export const checkForFakePath = (
  moves: ValidMoves,
  direction: Direction
): boolean => {
  const isVertical = isVerticalDirection(direction);
  const { up, down, left, right } = moves;
  const verticalValidation = Boolean(up && down) && Boolean(!left && !right);
  const horizontalValidation = Boolean(left && right) && Boolean(!up && !down);

  return isVertical ? verticalValidation : horizontalValidation;
};

export const checkForForkInPath = (
  moves: ValidMoves,
  direction: Direction
): boolean => {
  const { up, down, left, right } = moves;
  const isVertical = isVerticalDirection(direction);

  return isVertical ? Boolean(left && right) : Boolean(up && down);
};
