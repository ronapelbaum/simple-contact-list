import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar";

describe("Avatar.jsx suite", () => {
  it("renders correctly", () => {
    expect(shallow(<Avatar />).debug()).toMatchSnapshot();
  });
  it("renders correctly Avatar of citizen", () => {
    expect(shallow(<Avatar type="citizen" />).debug()).toMatchSnapshot();
  });
  it("renders correctly Avatar of professional", () => {
    expect(
      shallow(<Avatar type=" Professional  " className="a-clazz" />).debug()
    ).toMatchSnapshot();
  });
});
