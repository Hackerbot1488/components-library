import React from "react";
import "./Badge.css";
import classNames from "class-names";
interface badgeProps {
	className?: string;
	value: string | number;
	circle?: boolean;
	inline?: boolean;
	outer?: boolean;
	[type: string]: any;
}
export const Badge: React.FC<badgeProps> = ({
	className,
	circle,
	inline,
	outer,
	value,
	...attrs
}) => {
	const text = typeof value === "string";
	const classes = classNames(
		"badge",
		classNames,
		{ circle },
		{ outer },
		{ inline },
		{ text },
		{ warning: attrs.warning },
		{ alert: attrs.alert },
		{ success: attrs.success },
		{ info: attrs.info }
	);
	return (
		<span className={classes} {...attrs}>
			{value}
		</span>
	);
};
Badge.defaultProps = {
	className: "",
	circle: false,
	inline: false,
	outer: false,
};
