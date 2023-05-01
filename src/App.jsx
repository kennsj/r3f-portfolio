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
import Nav from "./UI/Header/Nav"
import Footer from "./UI/Footer/Footer"
import Test from "./UI/Test/Test"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense>
			{/* <Cursor /> */}
			<Leva hidden collapsed />
			<Nav />
			<div id='canvas'>
				<Canvas>
					{/* <Test /> */}
					<Interface />
					<LightSource />
					<Experience />
					<Preload all />
				</Canvas>
			</div>
			<Footer />
		</Suspense>
	</React.StrictMode>
)
