import React from "react";
import classNames from "class-names";
import "./Icon.css";
interface iconProps {
	name?: string;
	className?: string;
	onClick?: () => void;
	size?: number | null;
	disabled?: boolean;
	[type: string]: any;
}
export const Icon: React.FC<iconProps> = ({
	name,
	className,
	onClick,
	size,
	disabled,
	...attrs
}) => {
	const classes = classNames(
		"fa",
		`fa-${name}`,
		className,
		{ function: onClick },
		{ disabled }
	);
	const elemSize = size ? { fontSize: `${size}rem` } : undefined;
	return (
		<i
			className={classes}
			onClick={disabled ? undefined : onClick}
			style={elemSize}
			{...attrs}
		/>
	);
};

Icon.defaultProps = {
	name: "",
	className: "",
	onClick: undefined,
	size: null,
	disabled: false,
};
