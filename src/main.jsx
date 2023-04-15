import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Experience from "./Experience"
import "./index.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Leva } from "leva"
import LightSource from "./LightSource"
import Home from "./Home"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense fallback={"Hello"}>
			<Home />
			<Canvas>
				<ambientLight intensity={2} />
				<directionalLight />
				<LightSource />
				{/* <OrbitControls makeDefault /> */}
				{/* <Effects /> */}
				<Experience />
			</Canvas>
		</Suspense>
	</React.StrictMode>
)
