import { shallow } from "enzyme";
import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Modal } from "./Modal";
describe("Modal window component", () => {
	describe("with default props", () => {
		it("should not renders", () => {
			const component = shallow(<Modal />);
			expect(component.find(".modalOverlay").length).toBe(0);
		});
		it("should use default onCLick handler", () => {
			const result = Modal.defaultProps?.onCancel!();
			expect(result).toBe(undefined);
		});
		it("should use default onSUbmit handler", () => {
			const result = Modal.defaultProps?.onSubmit!();
			expect(result).toBe(undefined);
		});
	});
	describe("with custom props", () => {
		it("should renders", () => {
			const component = shallow(
				<Modal isOpen>
					<span>LAlalalalallalalala</span>
				</Modal>
			);
			expect(component.find(".modalOverlay").length).toBe(1);
		});
		it("should use custom onCancel handler", () => {
			const mockCallback = jest.fn();
			const component = shallow(
				<Modal isOpen onCancel={mockCallback}>
					<span>LAlalalalallalalala</span>
				</Modal>
			);
			component.find(Icon).simulate("click");
			component.find(Button).first().simulate("click");
			expect(mockCallback.mock.calls.length).toBe(2);
		});
		it("should use custom onSubmit handler", () => {
			const mockCallback = jest.fn();
			const component = shallow(
				<Modal isOpen onSubmit={mockCallback}>
					<span>LAlalalalallalalala</span>
				</Modal>
			);
			component.find(Button).last().simulate("click");
			expect(mockCallback.mock.calls.length).toBe(1);
		});
	});
});
