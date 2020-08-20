import React from "react";
import ClassNames from "class-names";
import "./Modal.css";
import { Portal } from "../Portal/Portal";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
interface ModalProps {
	title?: string;
	isOpen?: boolean;
	onCancel?: () => void;
	onSubmit?: () => void;
}
export const Modal: React.FC<ModalProps> = ({
	title,
	isOpen,
	onSubmit,
	onCancel,
	children,
}) => {
	return (
		<>
			{isOpen && (
				<Portal>
					<div className="modalOverlay">
						<div className="modalWindow">
							<div className="modalHeader">
								<div className="modalTitle">{title}</div>
								<Icon name="times" onClick={onCancel} />
							</div>
							<div className="modalBody">{children}</div>
							<div className="modalFooter">
								<Button onClick={onCancel} invert>
									Cancel
								</Button>
								<Button onClick={onSubmit}>Submit</Button>
							</div>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
};
Modal.defaultProps = {
	onCancel: () => {},
	onSubmit: () => {},
	title: "Modal title",
	isOpen: false,
};
