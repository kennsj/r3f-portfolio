import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Experience from "./Experiences/Experience"
import "./App.scss"
import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import LightSource from "./Experiences/LightSource"
import Interface from "./UI/Interface"
import Cursor from "./UI/Cursor"
import { Preload } from "@react-three/drei"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense>
			{/* <Cursor /> */}
			<Leva hidden collapsed />
			<div id='canvas'>
				<Canvas>
					<Interface />
					<LightSource />
					<Experience />
					<Preload all />
				</Canvas>
			</div>
		</Suspense>
	</React.StrictMode>
)
