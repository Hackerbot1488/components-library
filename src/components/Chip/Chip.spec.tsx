import { shallow } from "enzyme";
import React from "react";
import { Chip } from "./Chip";
describe("Chip component", () => {
	describe("with default props", () => {
		it("should render chip component ", () => {
			const component = shallow(<Chip text="myChip" />);
			expect(component).toMatchSnapshot();
		});
		it("should use default click handler", () => {
			const result = Chip.defaultProps?.onChipClick!("");
			expect(result).toBe(undefined);
		});
		it("should use default close handler", () => {
			const e = new MouseEvent("click") as unknown;
			const result = Chip.defaultProps?.onChipClose!(
				e as React.MouseEvent<HTMLSpanElement>,
				""
			);
			expect(result).toBe(undefined);
		});
	});
	describe("with custom props", () => {
		it("should render icon", () => {
			const component = shallow(
				<Chip text="text" withIcon iconName="arrow-up" />
			);
			expect(component.find(".chipIcon").length).toBe(1);
		});
		it("should render icon", () => {
			const component = shallow(<Chip text="text" withImage imageAlt="alt" />);
			expect(component.find(".chipImage").length).toBe(1);
		});
		it("should use custom click handler", () => {
			const mockCLick = jest.fn();
			const component = shallow(
				<Chip text="text" id={3} onChipClick={mockCLick} />
			);
			expect(mockCLick.mock.calls.length).toBe(0);
			component.simulate("click");
			expect(mockCLick.mock.calls.length).toBe(1);
		});
		it("should use custom close handler", () => {
			const mockClose = jest.fn();
			const component = shallow(
				<Chip text="text" id={2} withClose onChipClose={mockClose} />
			);
			expect(mockClose.mock.calls.length).toBe(0);
			component.find(".chipClose").simulate("click", new MouseEvent("click"));
			expect(mockClose.mock.calls.length).toBe(1);
		});
		it("should not call onClick handler if .chipClose clicked", () => {
			const mockClose = jest.fn();
			const mockCLick = jest.fn();
			const component = shallow(
				<Chip
					text="text"
					id={1}
					withClose
					onChipClose={mockClose}
					onChipClick={mockCLick}
				/>
			);
			expect(mockClose.mock.calls.length).toBe(0);
			component.find(".chipClose").simulate("click", new MouseEvent("click"));
			expect(mockClose.mock.calls.length).toBe(1);
			expect(mockCLick.mock.calls.length).toBe(0);
		});
	});
});
