import { Suspense } from "react"
import Experience from "./Experiences/Experience"
import "./App.scss"
import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import LightSource from "./Experiences/LightSource"
import Home from "./UI/Home"
import Cursor from "./UI/Cursor"
import { Preload } from "@react-three/drei"
import Nav from "./UI/Header/Nav"
import Footer from "./UI/Footer/Footer"
import Test from "./UI/Test/Test"
import Sno from "./routes/SNO-Oslo/Sno"
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Router,
	Routes,
	BrowserRouter,
} from "react-router-dom"

// export function BrowswerRouter() {
// 	return <Router />
// }

const App = () => {
	return (
		<Suspense>
			{/* <Cursor /> */}
			<Leva collapsed />
			<Nav />
			<div id='canvas'>
				<Canvas>
					{/* <Test /> */}
					{/* <Home /> */}
					<LightSource />
					<Experience />
					<Preload all />
					<BrowserRouter>
						<Routes>
							<Route path='/' index element={<Home />} />
							<Route path='/Sno' element={<Sno />} />
						</Routes>
					</BrowserRouter>
				</Canvas>
			</div>

			<Footer />
		</Suspense>
	)
}

export default App
