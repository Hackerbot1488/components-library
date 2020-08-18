import React from "react";
import "./TabBarItem.css";
import classNames from "class-names";
interface TabBarItemProps {
	className?: string;
	[type: string]: any;
}
export const TabBarItem: React.FC<TabBarItemProps> = ({
	className,
	...attrs
}) => {
	const classes = classNames("TabBarItem", classNames);
	return <div className={classes} {...attrs}></div>;
};
