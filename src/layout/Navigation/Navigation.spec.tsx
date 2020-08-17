import { shallow } from "enzyme";
import React from "react";
import { Navigation } from "./Navigation";
describe("Navigation component", () => {
	it("should render Navigation component", () => {
		const component = shallow(<Navigation />);
		expect(component.find(".navigation").length).toBe(1);
	});
});
