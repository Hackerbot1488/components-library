import React from "react";
import "./ListGroup.css";
import classNames from "class-names";
type tagType = "ul" | "ol" | "div";
interface ListGroupProps {
	className?: string;
	children?: React.ReactNode;
	tag: keyof HTMLElementTagNameMap;
	[type: string]: any;
}
export const ListGroup: React.FC<ListGroupProps> = ({
	className,
	tag: Tag,
	children,
	...attrs
}) => {
	const classes = classNames("list-group", className);
	return React.createElement(
		Tag,
		{
			className: classes,
			...attrs,
		},
		children
	);
};

ListGroup.defaultProps = {
	className: "",
};
