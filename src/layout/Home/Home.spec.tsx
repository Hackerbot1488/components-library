import { shallow } from "enzyme";
import React from "react";
import { Home } from "./Home";
describe("Home component", () => {
	it("should render Home component", () => {
		const component = shallow(<Home />);
		expect(component).toMatchSnapshot();
	});
});
