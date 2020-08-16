import React from "react";
import "./main.css";
interface mainProps {
	children?: React.ReactNode;
}
export const Main: React.FC<mainProps> = ({ children }) => (
	<div className="main">{children}</div>
);
