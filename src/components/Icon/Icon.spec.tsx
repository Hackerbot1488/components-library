import { shallow } from "enzyme";
import React from "react";
import { Icon } from "./Icon";

describe("Icon component", () => {
	describe("without props", () => {
		it("should render component with default props", () => {
			const component = shallow(<Icon />);
			expect(component.find(".fa-").length).toBe(1);
		});
	});

	describe("With props", () => {
		describe("onClick handler", () => {
			it("should use custom handler", () => {
				const mockCallback = jest.fn();
				const component = shallow(<Icon onClick={mockCallback} />);
				expect(mockCallback.mock.calls.length).toBe(0);
				// const event = new MouseEvent('click')
				component.find("i").simulate("click");
				expect(mockCallback.mock.calls.length).toBe(1);
			});
			it("should not use any handler if disabled", () => {
				const mockCallback = jest.fn();
				const component = shallow(<Icon onClick={mockCallback} disabled />);
				expect(mockCallback.mock.calls.length).toBe(0);
				component.find("i").simulate("click");
				expect(mockCallback.mock.calls.length).toBe(0);
			});
		});
		it("should change size if size prop is defined", () => {
			const component = shallow(<Icon size={3} />);

			const size = component
				.find("i")
				.html()
				.match(/font-size:3rem/);
			expect(size).not.toBe(null);
		});
	});
});
