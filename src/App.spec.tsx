import { shallow } from "enzyme";
import React from "react";
import { App } from "./App";
describe("App component", () => {
	it("should render App component", () => {
		const component = shallow(<App />);
		expect(component).toMatchSnapshot();
	});
});
