import React, { Component, ReactNode } from "react";
import "./Tooltip.css";
import classNames from "class-names";
interface tooltipProps {
	children: ReactNode;
	content?: string;
	style?: {
		[type: string]: any;
	};
	position: "right" | "top" | "bottom" | "left";
}
interface tooltipState {
	visible: boolean;
}
export class Tooltip extends Component<tooltipProps, tooltipState> {
	state = {
		visible: false,
	};
	show = () => {
		this.setVisibility(true);
	};
	hide = () => {
		this.setVisibility(false);
	};
	setVisibility = (visible: boolean) => {
		this.setState({ visible });
	};
	static defaultProps = {
		content: "Tooltip content",
		position: "top",
	};
	render() {
		const { visible } = this.state;
		const { children, style, content, position } = this.props;
		const classes = classNames("tooltip", position);
		return (
			<span className="tooltipWrapper">
				{visible && (
					<span style={style} className={classes}>
						{content}
					</span>
				)}
				<span
					className="targetElement"
					onMouseEnter={this.show}
					onMouseLeave={this.hide}
				>
					{children}
				</span>
			</span>
		);
	}
}
