import { shallow } from "enzyme";
import React from "react";
import { ListGroup } from "./ListGroup";

describe("ListGroup component", () => {
	it("should render custom tag", () => {
		const component = shallow(<ListGroup tag="ul" />);
		expect(component.find("ul").length).toBe(1);
	});
	it("should render children", () => {
		const component = shallow(
			<ListGroup tag="ul">
				<li>lololo</li>
				<li>kokoko</li>
			</ListGroup>
		);
		expect(component.find("li").length).toBe(2);
	});
});
