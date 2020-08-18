import React from "react";
import "./Chip.css";
import classNames from "class-names";
import { Icon } from "../Icon/Icon";
import { Image } from "../Image/Image";
type idType = string | number | undefined;
interface chipProps {
	className?: string;
	text: string;
	withImage?: boolean;
	withClose?: boolean;
	withIcon?: boolean;
	imageSrc?: string;
	imageAlt?: string;
	iconName?: string;
	onChipClick?: (id: idType) => void;
	onChipClose?: (e: React.MouseEvent<HTMLSpanElement>, id: idType) => void;
	id?: string | number;
	[type: string]: any;
}
export const Chip: React.FC<chipProps> = ({
	className,
	text,
	imageAlt,
	imageSrc,
	withClose,
	withIcon,
	withImage,
	iconName,
	onChipClick,
	onChipClose,
	id,
	...attrs
}) => {
	const classes = classNames("chip", classNames);
	const onChipClickAction = () => {
		onChipClick!(id);
	};
	const onChipCloseAction = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		onChipClose!(e, id);
	};
	return (
		<div className={classes} {...attrs} onClick={onChipClickAction}>
			{withImage && (
				<span className="chipImage">
					<Image src={imageSrc} alt={imageAlt} width={24} height={24} />
				</span>
			)}
			{withIcon && (
				<span className="chipIcon">
					<Icon name={iconName} />
				</span>
			)}
			<span className="chipText">{text}</span>
			{withClose && (
				<span className="chipClose" onClick={onChipCloseAction}>
					<Icon name="times" />
				</span>
			)}
		</div>
	);
};
Chip.defaultProps = {
	className: "",
	withImage: false,
	withIcon: false,
	withClose: false,
	imageSrc: "",
	imageAlt: "",
	iconName: "user-tie",
	onChipClick: () => {},
	onChipClose: () => {},
	id: undefined,
};
