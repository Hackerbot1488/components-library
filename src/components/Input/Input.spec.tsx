import { shallow } from "enzyme";
import React from "react";
import { Input } from "./Input";
const setUp = (props) => shallow(<Input {...props} />);
describe("Input component", () => {
	it("should render", () => {
		const component = setUp({ id: "idin" });
		expect(component.find("input").length).toBe(1);
	});
	it("should render error if it is defined", () => {
		const component = setUp({ id: "lol", error: "lalalla" });
		expect(component.find(".inputError").length).toBe(1);
	});
	it("should render label if it is defined", () => {
		const component = setUp({ id: "lalala", label: "kikikik" });
		expect(component.find(".inputLabel").length).toBe(1);
	});
	it('should render "required" if it is defined', () => {
		const component = setUp({ id: "pqpqpq", required: true });
		expect(component.find(".inputRequired").length).toBe(1);
	});
});
