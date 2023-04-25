import React from "react"
import SVGLogo from "../assets/logo/kj-pictogram_white.svg"
import { Scroll, ScrollControls } from "@react-three/drei"
// import SVGLogo from "./assets/aurora-icon-2.svg"
// import SVGLogo from "./assets/aurora-icon-2.png"
// import SVGLogo from "./assets/aurora-kj.png"
import { gsap } from "gsap"
import Header from "./Header/Header"
import Work from "./Work/Work"
import Footer from "./Footer/Footer"
import { useFrame, useThree } from "@react-three/fiber"

const Home = () => {
	return (
		<ScrollControls
			pages={1.5}
			damping={0.1}
			// infinite={true}
		>
			<Scroll html>
				<Header />
				<Work />
				<Footer />
			</Scroll>
		</ScrollControls>
	)
}

export default Home
