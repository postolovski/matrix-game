import {
  BROKEN_PATH,
  FAILED_TO_FIND_DIRECTION,
  FAKE_TURN,
  MULTIPLE_START_PATHS,
} from "../../constants";
import { detectDirection, findStart, nextPosition } from "../../helpers";
import { matriceTestData } from "../../matrice";

const matrix1StartPosition = { row: 0, col: 0 };

const mockFindStart = jest.fn((matrix) => findStart(matrix));
const mockDetectDirection = jest.fn((matrix, position) =>
  detectDirection(matrix, position)
);
const mockNextPosition = jest.fn((matrix, direction, position) =>
  nextPosition(matrix, direction, position)
);

describe("Navigators", () => {
  it("should not find start", () => {
    const { matrix } = matriceTestData.matrix7;

    expect(mockFindStart(matrix)).toBe(null);
  });

  it("should find start", () => {
    const { matrix } = matriceTestData.matrix1;

    expect(mockFindStart(matrix)).toEqual(matrix1StartPosition);
  });

  it("should return direction to the right", () => {
    const { matrix } = matriceTestData.matrix1;

    expect(mockDetectDirection(matrix, matrix1StartPosition)).toBe("Right");
  });

  it("should throw multiple start paths", () => {
    const { matrix } = matriceTestData.matrix14;
    const testingPosition = {
      row: 0,
      col: 4,
    };

    expect(() => mockDetectDirection(matrix, testingPosition)).toThrow(
      MULTIPLE_START_PATHS
    );
  });

  it("should throw failed to find direction", () => {
    const matrix = [[]];
    const testingPosition = {
      row: 0,
      col: 0,
    };

    expect(() => mockDetectDirection(matrix, testingPosition)).toThrow(
      FAILED_TO_FIND_DIRECTION
    );
  });

  it("should return next position based on given position", () => {
    const { matrix } = matriceTestData.matrix1;
    const direction = "Right";
    const result = {
      direction: "Right",
      position: {
        row: 0,
        col: 1,
      },
    };

    expect(mockNextPosition(matrix, direction, matrix1StartPosition)).toEqual(
      result
    );
  });

  it("should throw broken path", () => {
    const { matrix } = matriceTestData.matrix13;
    const direction = "Right";
    const testingPosition = {
      row: 2,
      col: 5,
    };

    expect(() => mockNextPosition(matrix, direction, testingPosition)).toThrow(
      BROKEN_PATH
    );
  });

  it("should throw fake path", () => {
    const { matrix } = matriceTestData.matrix15;
    const direction = "Right";
    const testingPosition = {
      row: 0,
      col: 4,
    };

    expect(() => mockNextPosition(matrix, direction, testingPosition)).toThrow(
      FAKE_TURN
    );
  });
});
