import React from "react"
import { Scroll, ScrollControls } from "@react-three/drei"
import Header from "./Header/Header"
import WorkList from "./WorkList/WorkList"

const Home = () => {
	return (
		<ScrollControls
			pages={4}
			damping={0.1}
			// infinite={true}
		>
			<Scroll html>
				<Header />
				<WorkList />
			</Scroll>
		</ScrollControls>
	)
}

export default Home
