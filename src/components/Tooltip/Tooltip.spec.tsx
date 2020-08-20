import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Tooltip } from "./Tooltip";
const setUp = (): ShallowWrapper => {
	return shallow(
		<Tooltip>
			<span>alallaa</span>
		</Tooltip>
	);
};
describe("Tooltip component", () => {
	describe("with default props", () => {
		let component: ShallowWrapper;
		beforeEach(() => {
			component = setUp();
		});
		it("should render wrapper", () => {
			expect(component.find(".tooltipWrapper").length).toBe(1);
		});
		it("should use default state", () => {
			const instance = component.instance() as Tooltip;
			expect(instance.state.visible).toEqual(false);
		});
		it("should not render tooltip", () => {
			expect(component.find(".tooltip").length).toBe(0);
		});
	});
	describe("with custom props", () => {
		let component: ShallowWrapper;
		let instance: Tooltip;
		beforeEach(() => {
			component = setUp();
			instance = component.instance() as Tooltip;
		});
		it("should use show()", () => {
			expect(instance.state.visible).toBe(false);
			instance.show();
			expect(instance.state.visible).toBe(true);
		});
		it("should render tooltip if visible is true", () => {
			expect(component.find(".tooltip").length).toBe(0);
			instance.show();
			expect(component.find(".tooltip").length).toBe(1);
		});
		it("should use hide()", () => {
			instance.show();
			expect(instance.state.visible).toBe(true);
			instance.hide();
			expect(instance.state.visible).toBe(false);
		});
	});
});
