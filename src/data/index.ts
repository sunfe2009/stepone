export const SITE_TITLE = "The Step One";
export const SITE_DESCRIPTION = "小步向前";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
];

export const title = "The Step One";
export const description = "小步向前";
export const image = "/images/ogimage.png";
export const url = "https://thestep.one";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "The Step One",
};


export const products = [
	{
		name: "typeless",
		url: "https://typeless.me",
		image: "/products/typeless.png",
	},
	{
		name: "UI Root",
		url: "https://uiroot.com",
		image: "/products/uiroot.png",
	},
];

export const socialLinks = [
	{
		label: "@x",
		url: "https://x.com/molightme",
	},
	{
		label: "email",
		url: "mailto:hi@thestep.one",
	},
	{
		label: "@bsky",
		url: "https://molightme.bsky.social",
	},
];
