import {
  BROKEN_PATH,
  FAKE_TURN,
  FORK_IN_PATH,
  MISSING_END_CHAR,
  MISSING_START_CHAR,
  MULTIPLE_STARTS,
  MULTIPLE_START_PATHS,
} from "../../constants";
import { pathfinder } from "../../engine";
import { matriceTestData } from "../../matrice";

const mockPathfinder = jest.fn((matrix) => pathfinder(matrix));

describe("Engine", () => {
  it("should return correct letters and path on valid matrix", () => {
    const { matrix, result } = matriceTestData.matrix1;
    const { path, letters } = result;

    const expectedResult = {
      path,
      letters,
      error: "",
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return missing start char error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix7;

    const expectedResult = {
      path: "",
      letters: "",
      error: MISSING_START_CHAR,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return missing end char error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix8;

    const expectedResult = {
      path: "",
      letters: "",
      error: MISSING_END_CHAR,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return multiple starts error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix9;

    const expectedResult = {
      path: "",
      letters: "",
      error: MULTIPLE_STARTS,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return fork in path error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix12;

    const expectedResult = {
      path: "",
      letters: "",
      error: FORK_IN_PATH,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return broken path error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix13;

    const expectedResult = {
      path: "",
      letters: "",
      error: BROKEN_PATH,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return multiple starting paths error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix14;

    const expectedResult = {
      path: "",
      letters: "",
      error: MULTIPLE_START_PATHS,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });

  it("should return multiple starting paths error on invalid matrix", () => {
    const { matrix } = matriceTestData.matrix15;

    const expectedResult = {
      path: "",
      letters: "",
      error: FAKE_TURN,
    };

    expect(mockPathfinder(matrix)).toEqual(expectedResult);
  });
});
