import React from "react";
import "./main.css";
interface mainProps {
	children?: ChildNode;
}
export const Main: React.Fc<mainProps> = ({ children }: mainProps) => (
	<div className="main">{children}</div>
);
