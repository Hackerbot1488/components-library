import { shallow } from "enzyme";
import React from "react";
import { Badge } from "./Badge";

describe("Badge component", () => {
	describe("with default props", () => {
		it("should render component", () => {
			const component = shallow(<Badge value="+5" />);
			expect(component).toMatchSnapshot();
		});
	});
	describe("with custom props", () => {
		it("should use custom styles", () => {
			const component = shallow(<Badge value={12} circle outer info />);
			expect(component).toMatchSnapshot();
		});
	});
});
