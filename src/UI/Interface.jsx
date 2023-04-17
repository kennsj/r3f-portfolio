import React from "react"
import SVGLogo from "../assets/logo/kj-pictogram_white.svg"
import { Scroll, ScrollControls } from "@react-three/drei"
import { Noise } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
// import SVGLogo from "./assets/aurora-icon-2.svg"
// import SVGLogo from "./assets/aurora-icon-2.png"
// import SVGLogo from "./assets/aurora-kj.png"

const workImages = [
	"./img/work-preview-sno.png",
	"./img/work-preview-cinema.png",
	"./img/work-preview-folkeeventyr.png",
]

console.log(workImages)

const Home = () => {
	return (
		<ScrollControls
			pages={4.2}
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
				<section className='section__work'>
					<div>
						<img src={`${workImages[0]}`} />
					</div>
					<div>
						<img src={`${workImages[1]}`} />
					</div>
					<div>
						<img src={`${workImages[2]}`} />
					</div>
				</section>
				<footer style={{ top: "400vh" }}>
					<div>Kenneth</div>
					<div>Contact</div>
				</footer>
			</Scroll>
		</ScrollControls>
	)
}

export default Home
