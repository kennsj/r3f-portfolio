import React, { useRef } from "react"
import { Scroll, ScrollControls } from "@react-three/drei"
import Header from "./Header/Header"
import WorkList from "./WorkList/WorkList"
import About from "./About/About"
import Footer from "./Footer/Footer"
import { useThree } from "@react-three/fiber"
import {
	GlobalCanvas,
	UseCanvas,
	SmoothScrollbar,
	ScrollScene,
} from "@14islands/r3f-scroll-rig"

const Home = () => {
	const body = document.querySelector("body")
	// console.log(body.getClientRects())

	const { width, height, factor } = useThree((state) => state.viewport)

	const state = useThree()
	// console.log(state.gl.setSize.length)
	// console.log(factor)
	// console.log(height, width)

	return (
		// <ScrollControls
		// 	pages={height}
		// 	// pages={25}
		// 	damping={0.15}
		// 	// infinite={true}
		// >
		<>
			<Header />
			<WorkList />
			<About />
			<Footer />
		</>
		// </ScrollControls>
	)

	// return (
	// 	<ScrollControls
	// 		pages={height}
	// 		// pages={25}
	// 		damping={0.15}
	// 		// infinite={true}
	// 	>
	// 		<Scroll html>
	// 			<Header />
	// 			<WorkList />
	// 			<About />
	// 			<Footer />
	// 		</Scroll>
	// 	</ScrollControls>
	// )
}

export default Home
