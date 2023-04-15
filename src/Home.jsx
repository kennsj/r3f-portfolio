import React from "react"
import SVGLogo from "./assets/kj-pictogram.svg"

const Home = () => {
	return (
		<h1 className='home'>
			<img
				style={{ width: "50px", stroke: "white", marginTop: "30px" }}
				src={SVGLogo}
			/>
		</h1>
	)
}

export default Home
