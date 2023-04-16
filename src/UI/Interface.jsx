import React from "react"
import SVGLogo from "../assets/kj-pictogram_white.svg"
import { Scroll, ScrollControls } from "@react-three/drei"
// import SVGLogo from "./assets/aurora-icon-2.svg"
// import SVGLogo from "./assets/aurora-icon-2.png"
// import SVGLogo from "./assets/aurora-kj.png"

const Home = () => {
	return (
		<ScrollControls
			pages={3}
			damping={0.1}
			// infinite={true}
		>
			<Scroll html>
				<header className='header'>
					<h1 style={{ width: "50vw" }}>
						Continuously exploring & challenging myself to create memorable
						experiences.
					</h1>
				</header>
				<section style={{ top: "200vh" }}>
					<h1>Hello 2</h1>
				</section>
				<section style={{ top: "300vh" }}>
					<h1>Hello 2</h1>
				</section>
			</Scroll>
		</ScrollControls>
	)
}

export default Home
