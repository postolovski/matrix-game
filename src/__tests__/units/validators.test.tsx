import {
  MISSING_END_CHAR,
  MISSING_START_CHAR,
  MULTIPLE_STARTS,
  endChar,
  startChar,
} from "../../constants";
import {
  checkCharacterOccurances,
  checkForForkInPath,
  checkValidMoves,
  initialDirectionAndPositionValidator,
  isLetter,
  matrixStructureValidation,
} from "../../helpers";
import { matriceTestData } from "../../matrice";
import { DirectionAndPosition } from "../../types";

const mockIsLetter = jest.fn((char) => isLetter(char));
const mockCharacterOccurances = jest.fn((matrix, char) =>
  checkCharacterOccurances(matrix, char)
);
const matrixStructureValidate = jest.fn((matrix) =>
  matrixStructureValidation(matrix)
);
const mockInitialDirection = jest.fn((matrix) =>
  initialDirectionAndPositionValidator(matrix)
);
const mockForkInPath = jest.fn((moves, direction) =>
  checkForForkInPath(moves, direction)
);

describe("Validators", () => {
  it("should return true on valid letter", () => {
    expect(mockIsLetter("A")).toBe(true);
  });

  it("should return false on number", () => {
    expect(mockIsLetter(7)).toBe(false);
  });

  it("should check for start character occurances", () => {
    const { matrix } = matriceTestData.matrix1;

    expect(mockCharacterOccurances(matrix, startChar)).toBe(1);
  });

  it("should check for multiple start character occurances", () => {
    const { matrix } = matriceTestData.matrix9;

    expect(mockCharacterOccurances(matrix, startChar)).toBe(2);
  });

  it("should check for single end character occurances", () => {
    const { matrix } = matriceTestData.matrix1;

    expect(mockCharacterOccurances(matrix, endChar)).toBe(1);
  });

  it("should check for none end character occurances", () => {
    const { matrix } = matriceTestData.matrix8;

    expect(mockCharacterOccurances(matrix, endChar)).toBe(0);
  });

  it("should validate matrix structure with missing start", () => {
    const { matrix } = matriceTestData.matrix7;

    expect(() => matrixStructureValidate(matrix)).toThrow(MISSING_START_CHAR);
  });

  it("should validate matrix structure with multple starts", () => {
    const { matrix } = matriceTestData.matrix9;

    expect(() => matrixStructureValidate(matrix)).toThrow(MULTIPLE_STARTS);
  });
  it("should throw missing end character", () => {
    const { matrix } = matriceTestData.matrix8;

    expect(() => matrixStructureValidate(matrix)).toThrow(MISSING_END_CHAR);
  });

  it("should return initial direction and position", () => {
    const { matrix } = matriceTestData.matrix1;
    const initialPositionAndDirection: DirectionAndPosition = {
      direction: "Right",
      position: {
        row: 0,
        col: 0,
      },
    };

    expect(mockInitialDirection(matrix)).toEqual(initialPositionAndDirection);
  });

  it("should detect fork on path", () => {
    const { matrix } = matriceTestData.matrix12;
    const validMoves = checkValidMoves(matrix, { row: 2, col: 7 });
    const direction = "Right";

    expect(mockForkInPath(validMoves, direction)).toBe(true);
  });

  it("should check for fork on path", () => {
    const { matrix } = matriceTestData.matrix12;
    const validMoves = checkValidMoves(matrix, { row: 2, col: 6 });
    const direction = "Right";

    expect(mockForkInPath(validMoves, direction)).toBe(false);
  });
});
