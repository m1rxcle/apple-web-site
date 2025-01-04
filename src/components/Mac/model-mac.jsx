import { useEffect, useRef, useState } from "react"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import { View } from "@react-three/drei"
import gsap from "gsap"

import ModelMacView from "./model-mac-view"
import { animateWithGsapTimeLine } from "../../utils/animations"
import { modelsForMac, sizesForMac } from "../../constants"

const ModelMac = () => {
	const [size, setSize] = useState("small")
	const [model, setModel] = useState({
		title: "MacBook Pro M4 in Natural Titanium",
		color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
	})

	//camera
	const cameraControlSmall = useRef()
	const cameraControlLarge = useRef()

	//model
	const small = useRef(new THREE.Group())
	const large = useRef(new THREE.Group())

	//rotation
	const [smallRotation, setSmallRotation] = useState(0)
	const [largeRotation, setLargeRotation] = useState(0)
	const tl = gsap.timeline()

	useEffect(() => {
		if (size === "large") {
			animateWithGsapTimeLine(tl, small, smallRotation, "#view1", "#view2", {
				transform: `translateX(-150%)`,
				duration: 2,
			})
		}
		if (size === "small") {
			animateWithGsapTimeLine(tl, large, largeRotation, "#view2", "#view1", {
				transform: `translateX(0)`,
				duration: 2,
			})
		}
	}, [size])

	useGSAP(() => {
		gsap.to("#heading", { y: 0, opacity: 1 })
	}, [])
	return (
		<section className="bg-black common-padding">
			<div className="screen-max-width">
				<h1 id="heading" className="section-heading">
					Take a closer look.
				</h1>
				<div className="flex flex-col items-center mt-5 overflow-hidden">
					<div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
						<ModelMacView
							index={1}
							groupRef={small}
							gsapType="view1"
							controlRef={cameraControlSmall}
							setRotationState={setSmallRotation}
							item={model}
							size={size}
						/>
						<ModelMacView
							index={2}
							groupRef={large}
							gsapType="view2"
							controlRef={cameraControlLarge}
							setRotationState={setLargeRotation}
							item={model}
							size={size}
						/>
					</div>
				</div>
				<Canvas
					className="w-full h-full"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						overflow: "hidden",
					}}
					eventSource={document.getElementById("root")}
				>
					<View.Port />
				</Canvas>
				<div className="mx-auto w-full">
					<p className="text-sm font-light text-center mb-5">{model.title}</p>
					<div className="flex-center">
						<ul className="color-container">
							{modelsForMac.map((item, i) => (
								<li
									key={i}
									className="w-6 h-6 rounded-full mx-2 cursor-pointer"
									style={{
										backgroundColor: item.color[0],
									}}
									onClick={() => setModel(item)}
								/>
							))}
						</ul>
						<button className="size-btn-container">
							{sizesForMac.map(({ label, value }) => (
								<span
									key={value}
									className="size-btn"
									style={{
										backgroundColor: size === value ? "white" : "transparent",
										color: size === value ? "black" : "white",
									}}
									onClick={() => setSize(value)}
								>
									{label}
								</span>
							))}
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ModelMac
