import React from "react";
import classNames from "class-names";
import "./Button.css";

interface buttonProps {
	children?: React.ReactNode | string;
	onCLick?: () => void;
	className?: string;
	disabled?: boolean;
	active?: boolean;
	attrs?: any;
}

export const Button: React.FC<buttonProps | any> = ({
	children,
	onCLick,
	className,
	disabled,
	active,
	...attrs
}) => {
	const classes: string = classNames("button", className, { active });
	const Tag = attrs.href ? "a" : "button";
	const onClickAction = (
		e: React.MouseEvent<HTMLButtonElement | HTMLLinkElement>
	) => {
		if (disabled) {
			console.log(e);
			e.preventDefault();
		} else {
			return onCLick(e);
		}
	};
	return (
		<div>
			<Tag
				className={classes}
				disabled={disabled}
				onClick={onClickAction}
				{...attrs}
			>
				{children}
			</Tag>
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
