import { shallow } from "enzyme";
import React from "react";
import { ButtonGroup } from "./ButtonGroup";
describe("ButtonGroup component", () => {
	describe("with no props", () => {
		it("should render ButtonGroup component with default props", () => {
			const component = shallow(<ButtonGroup />);
			expect(component.find(".button-group").length).toBe(1);
			expect(component.find(".vertical").length).toBe(0);
		});
	});
	describe("with props", () => {
		it("should render children", () => {
			const component = shallow(
				<ButtonGroup>
					<button>Hello</button>
					<button>Bruh</button>
				</ButtonGroup>
			);
			expect(component.find("button").length).toBe(2);
		});
	});
});
