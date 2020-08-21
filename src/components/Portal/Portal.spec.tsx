import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Portal } from "./Portal";
describe("Portal component", () => {
	describe("with default props", () => {
		it("should renders", () => {
			const component = shallow(<Portal />);
			expect(component).toMatchSnapshot();
		});
	});
	describe("with custom props", () => {
		let component: ShallowWrapper;
		beforeEach(() => {
			component = shallow(
				<Portal>
					<button>LAalalalala</button>
				</Portal>
			);
		});
		it("should renders children", () => {
			expect(component.find("button").length).toBe(1);
		});
		it("should been delited", () => {
			component.unmount();
			expect(component.find("button").length).toBe(0);
		});
	});
});
