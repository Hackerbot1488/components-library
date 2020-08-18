import React from "react";
import classNames from "class-names";
import "./ListGroupItem.css";
interface ListGroupItemProps {
	className?: string;
	children?: React.ReactNode;
	tag: keyof HTMLElementTagNameMap;
	disabled?: boolean;
	active?: boolean;
	[type: string]: any;
}
export const ListGroupItem: React.FC<ListGroupItemProps> = ({
	className,
	tag: Tag,
	children,
	disabled,
	active,
	...attrs
}) => {
	const classes = classNames(
		"list-group__item",
		className,
		{ disabled },
		{ active }
	);
	if (attrs.href && Tag === "li") {
		Tag = "a";
	}
	return React.createElement(
		Tag,
		{
			className: classes,
			...attrs,
		},
		children
	);
};

ListGroupItem.defaultProps = {
	className: "",
	disabled: false,
	active: false,
};
