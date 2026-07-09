import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vite-plus/test";

import { BrandIcon } from "./brand-icon";

afterEach(cleanup);

describe("BrandIcon", () => {
  it("renders a file icon with default styling", () => {
    const { container } = render(<BrandIcon />);

    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("forwards className to the icon", () => {
    const { container } = render(<BrandIcon className="brand-class" data-testid="brand" />);

    const icon = container.querySelector("svg");
    expect(icon?.className).toContain("brand-class");
  });
});
