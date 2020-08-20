import React from "react";
import "./TabBarItem.css";
import classNames from "class-names";
export interface TabBarItemProps {
	className?: string;
	activeTab?: string;
	label: string;
	[type: string]: any;
}
export const TabBarItem: React.FC<TabBarItemProps> = ({
	className,
	activeTab,
	label,
	...attrs
}) => {
	const classes = classNames("tab-bar-item", className, {
		active: activeTab === label,
	});
	return <div className={classes} {...attrs}></div>;
};
TabBarItem.defaultProps = {
	activeTab: "",
	className: "",
};
