import { shallow } from "enzyme";
import React from "react";
import { App } from "./App";
import { Button } from "./components/Button/Button";
describe("App component", () => {
	it("should render App component", () => {
		const component = shallow(<App />);
		expect(component).toMatchSnapshot();
	});
});
