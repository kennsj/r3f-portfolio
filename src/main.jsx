import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Experience from "./Experience"
import "./index.sass"
import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import LightSource from "./LightSource"
import Interface from "./UI/Interface"
import SVGLogo from "./assets/kj-pictogram_white.svg"
import Cursor from "./Cursor"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense>
			<Cursor />

			<nav>
				<a href=''>
					<img
						// style={{ width: "40px", stroke: "white", margin: "10vh 0 0 15vw" }}
						src={SVGLogo}
					/>
				</a>
				<div className='menu'></div>
			</nav>
			<Leva collapsed />
			<Canvas>
				<Interface />
				<LightSource />
				<Experience />
			</Canvas>
		</Suspense>
	</React.StrictMode>
)
