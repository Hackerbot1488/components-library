import React, { Component, ReactElement, ReactNode } from "react";
import "./TabBar.css";
import classNames from "class-names";
import { TabBarItemProps } from "./TabBarItem/TabBarItem";
import { TabBarNav } from "./TabBarNav/TabBarNav";
export interface TabBarProps {
	className?: string;
	vertical?: boolean;
	children?: ReactNode;
	[type: string]: any;
}
export interface TabBarState {
	activeTab: React.ReactNode | null;
	text: string;
}
export class TabBar extends Component<TabBarState, TabBarProps> {
	static defaultProps: TabBarProps = {
		className: "",
		children: undefined,
		vertical: false,
	};
	state = {
		activeTab: null,
	};
	componentDidMount() {
		const { children = [] }: TabBarProps = this.props;
		const activeTab = this.getChildrenLabels(children)[0];
		this.setActiveTab(activeTab);
	}
	getChildrenLabels = (children: any): string[] => {
		if (children instanceof Array) {
			return children.map(({ props }: TabBarItemProps) => props.label);
		} else {
			return [children.props.label];
		}
	};
	setActiveTab = (activeTab: string | undefined): void => {
		const { activeTab: currentTub } = this.state;
		if (currentTub !== activeTab) {
			this.setState({
				activeTab,
			});
		}
	};
	renderTabs = (): ReactNode => {
		const { children = [] } = this.props;
		const { activeTab } = this.state;
		return this.getChildrenLabels(children).map((navLabel: string) => (
			<TabBarNav
				key={navLabel}
				navLabel={navLabel}
				className={classNames("nav-item", { active: activeTab === navLabel })}
				onChangeActiveTab={this.setActiveTab}
			/>
		));
	};
	render() {
		const { activeTab } = this.state;
		const { vertical, className, children, ...attrs }: TabBarProps = this.props;
		const classes = classNames("tab-bar", className, { vertical });
		return (
			<div className={classes} {...attrs}>
				<div className="tab-bar-nav">{this.renderTabs()}</div>
				<div className="tab-container">
					{React.Children.map(children as ReactElement, (child) =>
						React.cloneElement(child, { activeTab })
					)}
				</div>
			</div>
		);
	}
}
