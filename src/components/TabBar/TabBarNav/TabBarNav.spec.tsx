import { shallow } from "enzyme";
import React from "react";
import { TabBarNav } from "./TabBarNav";
describe("TabBarNav component", () => {
	describe("with default props", () => {
		it("should renders", () => {
			const component = shallow(<TabBarNav />);
			expect(component.find(".nav-item").length).toBe(1);
		});
		it("should use default handler", () => {
			const result = TabBarNav.defaultProps?.onChangeActiveTab!("lalala");
			expect(result).toBe(undefined);
		});
		it("should use default nav label", () => {
			const component = shallow(<TabBarNav />).find("button");
			expect(component.text()).toBe("Tab");
		});
	});
	describe("with custom props", () => {
		it("should renders with custom label", () => {
			const component = shallow(<TabBarNav navLabel="lakalut" />);
			expect(component.text()).toBe("lakalut");
		});
		it("should use custom handler", () => {
			const mockCallback = jest.fn();
			const component = shallow(<TabBarNav onChangeActiveTab={mockCallback} />);
			expect(mockCallback.mock.calls.length).toBe(0);
			component.simulate("click");
			expect(mockCallback.mock.calls.length).toBe(1);
		});
	});
});
