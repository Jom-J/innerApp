/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import App from "../app.js";

describe("<App/>", () => {
  let valueInput;

  beforeAll(() => {
    const { getByLabelText } = render(<App />);
    valueInput = getByLabelText("Value");
  });

  it("valueInput should have the default value", () => {
    expect(valueInput.value).toBe("");
    fireEvent.change(valueInput, { target: { value: "ok" } });
  });

  it("valueInput should have the updated value", () => {
    expect(valueInput.value).toBe("ok");
  });

  afterAll(cleanup);
});
