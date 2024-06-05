import {
  BROKEN_PATH,
  crossRoad,
  FAILED_TO_FIND_DIRECTION,
  FAKE_TURN,
  FORK_IN_PATH,
  MULTIPLE_START_PATHS,
  startChar,
} from "../constants";
import {
  Direction,
  DirectionAndPosition,
  Matrix,
  Maybe,
  NeighboursValues,
  Position,
} from "../types";
import {
  checkForFakePath,
  checkForForkInPath,
  checkForMultipleStartingPoints,
  checkValidMoves,
  isLetter,
  isVerticalDirection,
} from "./validators";

const getNeighboursValues = (
  matrix: Matrix,
  currentPosition: Position
): NeighboursValues => {
  const { row, col } = currentPosition;

  const leftChar = col > 0 ? matrix[row][col - 1] : null;
  const rightChar = col + 1 >= matrix[row].length ? null : matrix[row][col + 1];
  const upChar = row === 0 ? null : matrix[row - 1][col];
  const downChar = row + 1 >= matrix.length ? null : matrix[row + 1][col];

  return { leftChar, rightChar, upChar, downChar };
};

const oppositeDirectionHelper = (
  matrix: Matrix,
  position: Position,
  direction: Direction
): Maybe<DirectionAndPosition> => {
  const isVertical = isVerticalDirection(direction);
  const validMoves = checkValidMoves(matrix, position);
  const { up, down, left, right } = validMoves;

  if (isVertical) {
    if (left) {
      return {
        position: left,
        direction: "Left",
      };
    }

    if (right) {
      return {
        position: right,
        direction: "Right",
      };
    }
  } else {
    if (up) {
      return {
        position: up,
        direction: "Up",
      };
    }

    if (down) {
      return {
        position: down,
        direction: "Down",
      };
    }
  }

  return null;
};

const findPositionByOppositeDirection = (
  matrix: Matrix,
  position: Position,
  direction: Direction
): Maybe<DirectionAndPosition> => {
  const validMoves = checkValidMoves(matrix, position);
  const currentChar = matrix[position.row][position.col];
  const isFork = checkForForkInPath(validMoves, direction);
  const fakePath = checkForFakePath(validMoves, direction);

  if (currentChar === crossRoad) {
    if (isFork) throw FORK_IN_PATH;
    if (fakePath) throw FAKE_TURN;
  }
  const newDirection = oppositeDirectionHelper(matrix, position, direction);

  return newDirection;
};

const checkPositionByDirection = (
  matrix: Matrix,
  direction: Direction,
  position: Position
) => {
  const { up, down, left, right } = checkValidMoves(matrix, position);
  if (direction === "Right") {
    if (!right) return null;
    return right;
  } else if (direction === "Left") {
    if (!left) return null;
    return left;
  } else if (direction === "Down") {
    if (!down) return null;
    return down;
  } else if (direction === "Up") {
    if (!up) return null;
    return up;
  }
};

export const findStart = (matrix: Matrix): Maybe<Position> => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === startChar) {
        return { row, col };
      }
    }
  }
  return null;
};

export const detectDirection = (
  matrix: Matrix,
  currentPosition: Position
): Direction => {
  const neighbours = getNeighboursValues(matrix, currentPosition);
  const { leftChar, rightChar, upChar, downChar } = neighbours;

  const multipleStartingPaths = checkForMultipleStartingPoints(neighbours);

  if (multipleStartingPaths) throw MULTIPLE_START_PATHS;

  if (leftChar) {
    return "Left";
  } else if (rightChar) {
    return "Right";
  } else if (upChar) {
    return "Up";
  } else if (downChar) {
    return "Down";
  }

  throw FAILED_TO_FIND_DIRECTION;
};

const oppositeDirectionResolver = (
  matrix: Matrix,
  position: Position,
  direction: Direction
) => {
  const crossRoadPositionUpdate = findPositionByOppositeDirection(
    matrix,
    position,
    direction
  );

  if (crossRoadPositionUpdate) {
    return {
      position: crossRoadPositionUpdate.position,
      direction: crossRoadPositionUpdate.direction,
    };
  }

  return null;
};

export const nextPosition = (
  matrix: Matrix,
  direction: Direction,
  position: Position
): DirectionAndPosition => {
  const currentChar = matrix[position.row][position.col];

  if (currentChar === crossRoad) {
    const crossRoadPositionUpdate = oppositeDirectionResolver(
      matrix,
      position,
      direction
    );
    if (crossRoadPositionUpdate) return crossRoadPositionUpdate;
  }

  const foundPositionByDirection = checkPositionByDirection(
    matrix,
    direction,
    position
  );

  if (foundPositionByDirection) {
    return {
      position: foundPositionByDirection,
      direction,
    };
  }

  if (isLetter(currentChar)) {
    const foundPositionByOppositeDirection = oppositeDirectionResolver(
      matrix,
      position,
      direction
    );
    if (foundPositionByOppositeDirection)
      return foundPositionByOppositeDirection;
  }

  throw BROKEN_PATH;
};
