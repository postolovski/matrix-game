import { endChar, startChar } from "../constants";

export type Maybe<T> = T | null;
export type Matrix = string[][];
export type StartOrEndChar = typeof startChar | typeof endChar;
export type Direction = "Right" | "Left" | "Down" | "Up" | undefined;

export type Position = {
  row: number;
  col: number;
};

export type DirectionAndPosition = {
  position: Position;
  direction: Direction;
};

export type ValidMoves = {
  up: Maybe<Position>;
  down: Maybe<Position>;
  left: Maybe<Position>;
  right: Maybe<Position>;
};

export type Result = {
  path: Maybe<string>;
  letters: Maybe<string>;
  error: Maybe<string>;
};

export type DetectInitialDirection = {
  direction?: Direction;
  error?: string;
};

export type NeighboursValues = {
  leftChar: Maybe<string>;
  rightChar: Maybe<string>;
  upChar: Maybe<string>;
  downChar: Maybe<string>;
};

export type ValidateInput = {
  error?: string;
  matrix?: Matrix;
};
