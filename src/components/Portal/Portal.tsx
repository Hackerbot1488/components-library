import { Component, ReactNode } from "react";
import ReactDom from "react-dom";
interface PortalProps {
	children?: ReactNode;
}
export class Portal extends Component<PortalProps, {}> {
	el = document.createElement("div");
	componentDidMount() {
		document.body.appendChild(this.el);
	}
	componentWillUnmount() {
		document.body.removeChild(this.el);
	}
	render() {
		const { children } = this.props;
		return ReactDom.createPortal(children, this.el);
	}
}
