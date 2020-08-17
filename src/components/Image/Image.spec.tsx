import { shallow } from "enzyme";
import React from "react";
import { Image } from "./Image";

describe("Image component", () => {
	describe("without props", () => {
		it("should render with default props", () => {
			const component = shallow(<Image />);
			expect(component).toMatchSnapshot();
		});
	});
	describe("with props", () => {
		it("it should render with props", () => {
			const component = shallow(
				<Image
					src={
						"https://habrastorage.org/getpro/habr/post_images/a1e/2ae/5b0/a1e2ae5b08cd0576a3e53c12620db779.jpg"
					}
					circle={true}
				/>
			);
			expect(component.find(".circle").length).toBe(1);
		});
	});
});
