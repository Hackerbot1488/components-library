import React, { ReactNode } from "react";
import classNames from "class-names";
import "./ButtonGroup.css";
interface buttonGroupProps {
	children?: ReactNode;
	className?: string;
	vertical?: boolean;
	[propName: string]: any;
}

export const ButtonGroup: React.FC<buttonGroupProps> = ({
	children,
	className,
	vertical,
	...attrs
}) => {
	const classes = classNames("btn-group", className, { vertical });
	return (
		<div className={classes} {...attrs}>
			{children}
		</div>
	);
};

ButtonGroup.defaultProps = {
	children: null,
	className: "",
	vertical: false,
};
