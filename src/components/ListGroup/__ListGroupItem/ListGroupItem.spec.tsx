import { shallow } from "enzyme";
import React from "react";
import { ListGroupItem } from "./ListGroupItem";
describe("ListGroupItem component", () => {
	describe("with default props", () => {
		it("should render component", () => {
			const component = shallow(<ListGroupItem tag="li" />);
			expect(component.find("li").length).toBe(1);
		});
	});
	describe("with custom props", () => {
		it("should render custom tag", () => {
			const component = shallow(<ListGroupItem tag="a" href="/test" />);
			expect(component.find("li").length).toBe(0);
			expect(component.find("a").length).toBe(1);
		});
		it('should render "a" if href is defined and Tag is "li"', () => {
			const component = shallow(<ListGroupItem href="/test" tag="li" />);
			expect(component.find("a").length).toBe(1);
		});
	});
});
