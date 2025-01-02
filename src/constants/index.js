import {
	blackImg,
	blueImg,
	highlightFirstVideo,
	highlightFourthVideo,
	highlightSecondVideo,
	highlightThirdVideo,
	hightLightForMacVideoFirstVideo,
	hightLightForMacVideoFourthVideo,
	hightLightForMacVideoSecondVideo,
	hightLightForMacVideoThirdVideo,
	whiteImg,
	yellowImg,
} from "../utils"

export const navLists = ["Store", "Mac", "iPhone", "Support"]

export const highlightsSlides = [
	{
		id: 1,
		textLists: ["Enter A17 Pro.", "Game-changing chip.", "Groundbreaking performance."],
		video: highlightFirstVideo,
		videoDuration: 4,
	},
	{
		id: 2,
		textLists: ["Titanium.", "So strong. So light. So Pro."],
		video: highlightSecondVideo,
		videoDuration: 5,
	},
	{
		id: 3,
		textLists: ["iPhone 15 Pro Max has the", "longest optical zoom in", "iPhone ever. Far out."],
		video: highlightThirdVideo,
		videoDuration: 2,
	},
	{
		id: 4,
		textLists: ["All-new Action button.", "What will yours do?."],
		video: highlightFourthVideo,
		videoDuration: 3.63,
	},
]

export const highlightsSlidesForMac = [
	{
		id: 1,
		textLists: ["Built for Apple Intelligence.", "Personal, private, powerful"],
		video: hightLightForMacVideoFirstVideo,
		videoDuration: 5,
	},
	{
		id: 2,
		textLists: ["M4, M4 Pro, and M4 Max.", "Ready for whatever’s impossible."],
		video: hightLightForMacVideoSecondVideo,
		videoDuration: 4,
	},
	{
		id: 3,
		textLists: ["A chipload of power."],
		video: hightLightForMacVideoFourthVideo,
		videoDuration: 3.8,
	},
	{
		id: 4,
		textLists: ["12MP Center Stage camera.", "Keeps you front and center."],
		video: hightLightForMacVideoThirdVideo,
		videoDuration: 4.5,
	},
]

export const models = [
	{
		id: 1,
		title: "iPhone 15 Pro in Natural Titanium",
		color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
		img: yellowImg,
	},
	{
		id: 2,
		title: "iPhone 15 Pro in Blue Titanium",
		color: ["#53596E", "#6395ff", "#21242e"],
		img: blueImg,
	},
	{
		id: 3,
		title: "iPhone 15 Pro in White Titanium",
		color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
		img: whiteImg,
	},
	{
		id: 4,
		title: "iPhone 15 Pro in Black Titanium",
		color: ["#454749", "#3b3b3b", "#181819"],
		img: blackImg,
	},
]

export const modelsForMac = [
	{
		id: 1,
		title: "MacBook Pro M4 in Natural Titanium",
		color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
	},
	{
		id: 2,
		title: "MacBook Pro M4 in Natural Titanium",
		color: ["#53596E", "#6395ff", "#21242e"],
	},
	{
		id: 4,
		title: "MacBook Pro M4 in Natural Titanium",
		color: ["#454749", "#3b3b3b", "#181819"],
		img: blackImg,
	},
]

export const sizes = [
	{ label: '6.1"', value: "small" },
	{ label: '6.7"', value: "large" },
]

export const sizesForMac = [
	{ label: '18.3"', value: "small" },
	{ label: '22.2"', value: "large" },
]

export const footerLinks = ["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"]
