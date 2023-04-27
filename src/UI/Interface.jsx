import React from "react"
import { Scroll, ScrollControls } from "@react-three/drei"
import Header from "./Header/Header"
import WorkList from "./WorkList/WorkList"
import Footer from "./Footer/Footer"

const Home = () => {
	return (
		<ScrollControls
			pages={4}
			damping={0.1}
			// infinite={true}
		>
			<Scroll html>
				<Header anc />
				<WorkList />
				<Footer />
			</Scroll>
		</ScrollControls>
	)
}

export default Home
