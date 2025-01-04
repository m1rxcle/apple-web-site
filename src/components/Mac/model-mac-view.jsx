import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from "three"

import Lights from "../iPhone/lights"
import { MacBook } from "./macbook"

const ModelMacView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
	return (
		<View index={index} id={gsapType} className={`w-full h-full absolute ${index === 2 ? "right-[-150%]" : ""}`}>
			<ambientLight intensity={0.2} />
			<PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
			<Lights />
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.4}
				target={new THREE.Vector3(0, 0.3, 0)}
				onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
			/>
			<group ref={groupRef} name={index === 1 ? "small" : "large"} position={[0, 0, 0]}>
				<Suspense>
					<MacBook scale={index === 1 ? [15, 15, 15] : [16, 16, 16]} size={size} item={item} />
				</Suspense>
			</group>
		</View>
	)
}
export default ModelMacView
