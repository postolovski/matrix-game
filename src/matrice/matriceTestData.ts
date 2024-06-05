import {
  BROKEN_PATH,
  FAKE_TURN,
  FORK_IN_PATH,
  MISSING_END_CHAR,
  MISSING_START_CHAR,
  MULTIPLE_STARTS,
  MULTIPLE_START_PATHS,
} from "../constants";
import {
  matrix1,
  matrix10,
  matrix11,
  matrix12,
  matrix13,
  matrix14,
  matrix15,
  matrix2,
  matrix3,
  matrix4,
  matrix5,
  matrix6,
  matrix7,
  matrix8,
  matrix9,
} from "./data";

export const matriceTestData = {
  matrix1: {
    result: {
      letters: "ACB",
      path: "@---A---+|C|+---+|+-B-X",
    },
    matrix: matrix1,
  },
  matrix2: {
    result: {
      letters: "ABCD",
      path: "@|A+---B--+|+--C-+|-||+---D--+|X",
    },
    matrix: matrix2,
  },
  matrix3: {
    result: {
      letters: "ACB",
      path: "@---A---+|||C---+|+-B-X",
    },
    matrix: matrix3,
  },
  matrix4: {
    result: {
      letters: "GOONIES",
      path: "@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|X",
    },
    matrix: matrix4,
  },
  matrix5: {
    result: {
      letters: "BLAH",
      path: "@B+++B|+-L-+A+++A-+HX",
    },
    matrix: matrix5,
  },
  matrix6: {
    result: {
      letters: "AB",
      path: "@-A--+|+-B--X",
    },
    matrix: matrix6,
  },
  matrix7: {
    result: {
      error: MISSING_START_CHAR,
    },
    matrix: matrix7,
  },
  matrix8: {
    result: {
      error: MISSING_END_CHAR,
    },
    matrix: matrix8,
  },
  matrix9: {
    result: {
      error: MULTIPLE_STARTS,
    },
    matrix: matrix9,
  },
  matrix10: {
    result: {
      error: MULTIPLE_STARTS,
    },
    matrix: matrix10,
  },
  matrix11: {
    result: {
      error: MULTIPLE_STARTS,
    },
    matrix: matrix11,
  },
  matrix12: {
    result: {
      error: FORK_IN_PATH,
    },
    matrix: matrix12,
  },
  matrix13: {
    result: {
      error: BROKEN_PATH,
    },
    matrix: matrix13,
  },
  matrix14: {
    result: {
      error: MULTIPLE_START_PATHS,
    },
    matrix: matrix14,
  },
  matrix15: {
    result: {
      error: FAKE_TURN,
    },
    matrix: matrix15,
  },
};
