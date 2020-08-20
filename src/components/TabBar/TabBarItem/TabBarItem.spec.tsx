import { shallow } from "enzyme";
import React from "react";
import { TabBarItem } from "./TabBarItem";
describe("TabBarItem component", () => {
	it("should renders", () => {
		const component = shallow(<TabBarItem label="lol" />);
		expect(component.find(".tab-bar-item").length).toBe(1);
	});
	it("should have active class", () => {
		const component = shallow(<TabBarItem label="lol" activeTab="lol" />);
		expect(component.find(".active").length).toBe(1);
	});
});
