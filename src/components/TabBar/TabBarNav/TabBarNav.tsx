import React from "react";
import "./TabBarNav.css";
import classNames from "class-names";
interface TabBarNavProps {
	className?: string;
	navLabel?: string;
	onChangeActiveTab?: (navLabel: string | undefined) => void;
	[type: string]: any;
}
export const TabBarNav: React.FC<TabBarNavProps> = ({
	className,
	navLabel,
	onChangeActiveTab,
	...attrs
}) => {
	const classes = classNames("nav-item", className);
	return (
		<button
			className={classes}
			onClick={() => {
				onChangeActiveTab!(navLabel);
			}}
			{...attrs}
		>
			{navLabel}
		</button>
	);
};
TabBarNav.defaultProps = {
	className: "",
	navLabel: "Tab",
	onChangeActiveTab: () => {},
};
