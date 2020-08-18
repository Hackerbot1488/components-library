import React from "react";
import "./TabBarNav.css";
import classNames from "class-names";
interface TabBarNavProps {
	className?: string;
	[type: string]: any;
}
export const TabBarNav: React.FC<TabBarNavProps> = ({
	className,
	...attrs
}) => {
	const classes = classNames("TabBarNav", classNames);
	return <div className={classes} {...attrs}></div>;
};
