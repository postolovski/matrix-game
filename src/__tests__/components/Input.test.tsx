import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Input } from "../../components";

const onChange = (value: string): string => value;

describe(Input, () => {
  it("should have error class", () => {
    const { container } = render(<Input onChange={onChange} error={true} />);

    expect(container.firstChild).toHaveClass("error");
  });
});
