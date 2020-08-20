import { render, shallow } from "enzyme";
import React from "react";
import { TabBar } from "./TabBar";
import { TabBarItem } from "./TabBarItem/TabBarItem";
describe("TabBar component", () => {
	describe("with default props", () => {
		it("should renders", () => {
			const component = shallow(<TabBar />);
			expect(component).toMatchSnapshot();
		});
		it("should use default state", () => {
			const component = shallow(<TabBar />).instance();
			expect(component.state).toEqual({
				activeTab: undefined,
			});
		});
		it("should render if children are undefined", () => {
			const component = shallow(<TabBar />).instance();
			expect(component.props.children).toBe(undefined);
		});
	});
	describe("with custom props", () => {
		it("should render children", () => {
			const component = render(
				<TabBar>
					<TabBarItem label="li" />
					<TabBarItem label="il" />
				</TabBar>
			);
			expect(component.find(".tab-bar-item").length).toBe(2);
		});
		it("should change state", () => {
			const instance = shallow(<TabBar />).instance() as TabBar;
			expect(instance.state).toEqual({ activeTab: undefined });
			instance.setActiveTab("blabla");
			expect(instance.state).toEqual({ activeTab: "blabla" });
		});
		it("should not change state if tabs are equal", () => {
			const instance = shallow(
				<TabBar>
					<TabBarItem label="kek" />
				</TabBar>
			).instance() as TabBar;
			expect(instance.state).toEqual({ activeTab: "kek" });
			instance.setActiveTab("kek");
			expect(instance.state).toEqual({ activeTab: "kek" });
		});
	});
});
