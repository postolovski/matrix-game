import { endChar } from "../constants";
import {
  checkIfPositionIsVisited,
  collectLetters,
  initialDirectionAndPositionValidator,
  matrixStructureValidation,
  nextPosition,
} from "../helpers";
import { Direction, Matrix, Maybe, Position, Result } from "../types";

export const pathfinder = (matrix: Matrix): Result => {
  const visitedPositions: Position[] = [];
  let direction: Maybe<Direction> = null;
  let foundLastChar: boolean = false;
  let path: string = "";
  let letters: string = "";
  let error: string = "";

  try {
    matrixStructureValidation(matrix);

    const { position, direction: initialDirection } =
      initialDirectionAndPositionValidator(matrix);

    visitedPositions.push(position);
    direction = initialDirection;

    while (!foundLastChar) {
      const currentPosition = visitedPositions[visitedPositions.length - 1];
      const { row, col } = currentPosition;
      const item = matrix[row][col];
      path = path + item;

      if (item === endChar) {
        foundLastChar = true;
        break;
      }

      const foundPositionAndDirection = nextPosition(
        matrix,
        direction,
        currentPosition
      );

      const { position, direction: foundDirection } = foundPositionAndDirection;

      const isPositionVisited = checkIfPositionIsVisited(
        visitedPositions,
        currentPosition
      );

      letters = collectLetters(isPositionVisited, item, letters);
      visitedPositions.push(position);
      direction = foundDirection;
    }
  } catch (e) {
    const err = e ? e.toString() : "System error occured, please try again.";
    error = err;
    path = "";
    letters = "";
  }

  return {
    path,
    letters,
    error,
  };
};
