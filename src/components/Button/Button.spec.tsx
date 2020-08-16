import React from "react";
import { Button } from "./Button";
import { shallow } from "enzyme";
const setUp = () => shallow(<Button />);
describe("Button component", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});
	describe("with no props", () => {
		it("should render Button component", () => {
			expect(component).toMatchSnapshot();
		});
		describe("default props", () => {
			it("should use default handler", () => {
				const result = Button.defaultProps!.onCLick!();
				expect(result).toBe(undefined);
			});
		});
	});
	describe("with props", () => {
		it("should render Button component with props", () => {
			const component = shallow(<Button className="lol" />);
			expect(component.find(".lol").length).toBe(1);
		});
		it("should use custom handler", () => {
			const mockCallback = jest.fn();
			const component = shallow(<Button onCLick={mockCallback} />);
			const btn = component.find("button");
			expect(mockCallback.mock.calls.length).toBe(0);
			btn.simulate("click");
			expect(mockCallback.mock.calls.length).toBe(1);
		});
	});
});
