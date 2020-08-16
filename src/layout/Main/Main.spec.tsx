import { shallow } from "enzyme";
import React from "react";
import { Main } from "./Main";
describe("Main component", () => {
	it("should render Main component", () => {
		const component = shallow(<Main />);
		expect(component).toMatchSnapshot();
	});
	it("should render children", () => {
		const component = shallow(
			<Main>
				<h1>Test</h1>
			</Main>
		);
		const header = component.find("h1");
		expect(header.length).toBe(1);
	});
});
