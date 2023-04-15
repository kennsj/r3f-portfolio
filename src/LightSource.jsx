import React, { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { isMobile } from "react-device-detect"

export default function LightSource() {
	const [colors, setColors] = useState([
		"orange",
		"red",
		"red",
		"orange",
		"#a6d59e",
		"#a6d59e",
		"blue",
		"blue",
	])
	const light = useRef()
	const light5 = useRef()

	useFrame((state, delta) => {
		easing.dampC(light.current.color, colors[5], 0.55, delta)

		easing.dampC(light5.current.color, colors[6], 0.45, delta)

		if (isMobile) {
			light.current.position.set(
				-0.1,
				-Math.sin(state.clock.getElapsedTime()) / 2,
				1
			)
		} else {
			easing.damp3(
				light.current.position,
				[
					((state.pointer.x / 2) * state.viewport.width) / 4,
					((state.pointer.y / 2) * state.viewport.height) / 4,
					1,
				],
				0.3,
				delta
			)
		}
	})

	return (
		<>
			<directionalLight ref={light} intensity={0.4} />

			<ambientLight color={"#a6d59e"} ref={light5} intensity={10.5} />
		</>
	)
}
