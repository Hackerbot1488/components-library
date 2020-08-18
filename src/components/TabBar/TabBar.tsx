import React from "react";
import "./TabBar.css";
import classNames from "class-names";
interface TabBarProps {
	className?: string;
	[type: string]: any;
}
export const TabBar: React.FC<TabBarProps> = ({ className, ...attrs }) => {
	const classes = classNames("tabBar", classNames);
	return <div className={classes} {...attrs}></div>;
};
