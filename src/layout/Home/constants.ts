interface socialConfigType {
	id: string;
	socialLink: string;
	imageLink: string;
	imgHeight: string;
}
interface dependencyType {
	id: string;
	name: string;
	link: string;
}
export const SOCIAL_CONFIG: socialConfigType[] = [
	{
		id: "youtube",
		socialLink: "https://youtube.com",
		imageLink:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png",
		imgHeight: "37",
	},
	{
		id: "linkedin",
		socialLink: "https://www.linkedin.com",
		imageLink:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png",
		imgHeight: "30",
	},
	{
		id: "vk",
		socialLink: "https://vk.com",
		imageLink: "http://pngimg.com/uploads/vkontakte/vkontakte_PNG27.png",
		imgHeight: "35",
	},
	{
		id: "twitter",
		socialLink: "https://twitter.com",
		imageLink:
			"http://www.fehrandpeers.com/wp-content/uploads/2015/12/TwitterLogo.png",
		imgHeight: "35",
	},
];

export const DEPENDENCIES: dependencyType[] = [
	{
		id: "typescript",
		name: "Typescript",
		link: "https://www.typescript.com",
	},
	{
		id: "classnames",
		name: "classNames",
		link: "https://www.npmjs.com/package/classnames",
	},
];
