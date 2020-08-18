import React from "react";
import "./Input.css";
import classNames from "class-names";
interface inputProps {
	className?: string;
	type?: string;
	id: string | number;
	error?: string;
	label?: string;
	required?: boolean;
	[type: string]: any;
}
export const Input: React.FC<inputProps> = ({
	type,
	className,
	id,
	label,
	required,
	error,
	...attrs
}) => {
	const classes = classNames("input", { error }, className);
	return (
		<div className="inputWrapper">
			{label && (
				<label className="inputLabel" htmlFor={id.toString()}>
					{label}
				</label>
			)}
			{required && <span className="inputRequired">Required</span>}
			<input
				type={type}
				name={id.toString()}
				className={classes}
				id={id.toString()}
				{...attrs}
			/>
			{error && <span className="inputError">{error}</span>}
		</div>
	);
};
Input.defaultProps = {
	className: "",
	type: "text",
	error: "",
	label: "",
};
