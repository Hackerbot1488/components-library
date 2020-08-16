import React from "react";
import classNames from "class-names";
import "./Button.css";

interface buttonProps {
	children?: React.ReactNode | string;
	onCLick?: () => void;
	className?: string;
	disabled?: boolean;
	active?: boolean;
}

export const Button: React.FC<buttonProps> = ({
	children,
	onCLick,
	className,
	disabled,
	active,
}) => {
	const classes: string = classNames("button", className, { active });
	return (
		<div>
			<button className={classes} disabled={disabled} onClick={onCLick}>
				{children}
			</button>
		</div>
	);
};
Button.defaultProps = {
	children: "Button",
	className: "",
	disabled: false,
	onCLick: () => {},
	active: false,
};
