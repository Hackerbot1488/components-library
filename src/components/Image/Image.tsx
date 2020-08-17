import React from "react";
import classNames from "class-names";
import "./Image.css";
interface imageProps {
	src?: string;
	alt?: string;
	className?: string;
	width?: number;
	height?: number;
	circle?: boolean;
	[type: string]: any;
}
export const Image: React.FC<imageProps> = ({
	src,
	alt,
	className,
	height,
	width,
	circle,
	...attrs
}) => {
	const classes = classNames(className, { circle });
	if (!src) {
		src = `https://via.placeholder.com/${width}x${height}`;
	}
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={classes}
			{...attrs}
		/>
	);
};
Image.defaultProps = {
	src: "",
	alt: "image",
	className: "",
	width: 100,
	height: 100,
	circle: false,
};
