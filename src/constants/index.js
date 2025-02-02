import {
	airpodsItemsImg,
	appleVisionItemImg,
	appleWatchItemImg,
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
	iPadCurImg2Src,
	iPadCurImgSrc,
	ipadItemImg,
	iPhoneCurImg2Src,
	iPhoneCurImgSrc,
	iphoneItemImg,
	macCurImgSrc,
	macItemImg,
	macMiniCurImgSrc,
	watchCurImg2Src,
	watchCurImgSrc,
	whiteImg,
	yellowImg,
} from "../utils"

export const navLists = [
	{
		id: 1,
		title: "Store",
		href: "/",
	},
	{
		id: 2,
		title: "Mac",
		href: "/mac",
	},
	{
		id: 3,
		title: "iPhone",
		href: "/iphone",
	},
	{
		id: 4,
		title: "Support",
		href: "/support",
	},
]

export const productsItems = [
	{
		id: 1,
		title: "Mac",
		img: macItemImg,
		href: "/mac",
	},
	{
		id: 2,
		title: "iPhone",
		img: iphoneItemImg,
		href: "/iphone",
	},
	{
		id: 3,
		title: "iPad",
		img: ipadItemImg,
		href: "/",
	},
	{
		id: 4,
		title: "Air Pods",
		img: airpodsItemsImg,
		href: "/",
	},
	{
		id: 5,
		title: "Apple Vision Pro",
		img: appleVisionItemImg,
		href: "/",
	},
	{
		id: 6,
		title: "Apple Watch",
		img: appleWatchItemImg,
		href: "/",
	},
]

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
	{ label: '14"', value: "small" },
	{ label: '16"', value: "large" },
]

export const footerLinks = ["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"]

export const cardsForCur = [
	{
		id: 1,
		title: "iPhone 16 Pro ",
		pretitle: "Apple intelligence.",
		price: "$999.00",
		priceMonth: "$41.62",
		img: iPhoneCurImgSrc,
		href: "/iphone",

		isBlack: false,
	},
	{
		id: 2,
		title: "Apple Watch Series 10",
		pretitle: "Thinstant classic",
		price: "$399.00",
		priceMonth: "$33.25",
		img: watchCurImgSrc,
		href: "/",

		isBlack: true,
	},
	{
		id: 3,
		title: "Apple Watch Black Unity Sport Loop",
		pretitle: "United by rhythm",
		price: "$49.00",
		img: watchCurImg2Src,
		href: "/",

		isBlack: false,
	},
	{
		id: 4,
		title: "iPad mini",
		pretitle: "Apple intelligence.",
		price: "$499.00",
		priceMonth: "$41.58",
		img: iPadCurImgSrc,
		href: "/",

		isBlack: true,
	},
	{
		id: 5,
		title: "MacBook Pro",
		pretitle: "Apple intelligence.",
		price: "$1599.00",
		priceMonth: "$133.25",
		img: macCurImgSrc,
		href: "/mac",

		isBlack: false,
	},
	{
		id: 6,
		title: "iPhone 16",
		pretitle: "Apple intelligence.",
		price: "$799.00",
		priceMonth: "$33.30",
		img: iPhoneCurImg2Src,
		href: "/iphone",
		isBlack: false,
	},
	{
		id: 7,
		title: "Apple Watch Ultra 2",
		pretitle: "New finish. Never quit",
		price: "$799.00",
		priceMonth: "$66.58",
		img: watchCurImgSrc,
		href: "/",

		isBlack: true,
	},
	{
		id: 8,
		title: "iPad Air",
		pretitle: "Apple intelligence.",
		price: "$599.00",
		priceMonth: "$49.91",
		img: iPadCurImg2Src,
		href: "/",

		isBlack: true,
	},
	{
		id: 9,
		title: "Mac mini",
		pretitle: "Apple intelligence.",
		price: "$599.00",
		priceMonth: "$49.91",
		img: macMiniCurImgSrc,
		href: "/",

		isBlack: true,
	},
]
