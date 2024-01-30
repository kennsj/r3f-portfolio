import { useRef, useEffect, useState } from "react"
import Experience from "./Experiences/Experience"
import "./App.scss"
import { Canvas } from "@react-three/fiber"

// import { Leva } from "leva"
import LightSource from "./Experiences/LightSource"
import Home from "./UI/Home"
import Cursor from "./UI/Cursor"
import { Preload } from "@react-three/drei"
import Nav from "./UI/Header/Nav"
import Social from "./UI/Social/Social"
import Sno from "./routes/SNO-Oslo/Sno"
import Cinema from "./routes/Cinema/Cinema"
import Nfe from "./routes/Nfe/Nfe"
import { Route, Routes, BrowserRouter } from "react-router-dom"

const routes = [
	{
		path: "/",
		animation: "presentation",
		Component: Home,
	},
	{
		path: "/sno",
		id: "sno",
		animation: "sno",
	},
]

const App = () => {
	const [displayLocation, setDisplayLocation] = useState(location)
	const [transitionStage, setTransitionStage] = useState("fadeIn")

	useEffect(() => {
		if (location !== displayLocation) setTransitionStage("fadeOut")
	}, [location, displayLocation])

	const handleAnimationEnd = (e) => {
		if (transitionStage === "fadeOut") {
			setTransitionStage("fadeIn")
			setDisplayLocation(location)
		}
	}

	const el = useRef()

	return (
		<>
			{/* <Cursor /> */}
			{/* <Leva collapsed /> */}
			{/* <Nav /> */}
			<Testing />

			<div id='canvas'>
				<Canvas>
					<LightSource />
					<Experience />
					<Preload all />
				</Canvas>
			</div>

			<Social />
		</>
	)
}

const Testing = () => {
	return (
		<>
			<main className='main_test'>
				<h1 className='testing'>
					<a href='/sno'>Hi</a>
				</h1>
			</main>
		</>
	)
}

export default App
