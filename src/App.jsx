import { Suspense } from "react"
import Experience from "./Experiences/Experience"
import "./App.scss"
import { Canvas } from "@react-three/fiber"
// import { Leva } from "leva"
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
	HashRouter,
	BrowserRouter,
	createHashRouter,
} from "react-router-dom"

// export function BrowswerRouter() {
// 	return <Router />
// }

// const router = createHashRouter([
// 	{
// 		basename: "/",
// 		path: "/",
// 		element: <Home />,
// 		children: [
// 			{
// 				path: "/sno",
// 				element: <Sno />,
// 				//   loader: salesLoader
// 			},
// 		],
// 	},
// ])

const App = () => {
	return (
		<>
			{/* <Cursor /> */}
			{/* <Leva collapsed /> */}
			<Nav />
			<div id='canvas'>
				<Canvas>
					{/* <Test /> */}
					{/* <Home /> */}
					<LightSource />
					<Experience />
					<Preload all />
					{/* <RouterProvider router={router} /> */}
					<HashRouter>
						<Routes>
							<Route path='/' index element={<Home />} />
							<Route path='/Sno' element={<Sno />} />
						</Routes>
					</HashRouter>
				</Canvas>
			</div>

			<Footer />
		</>
	)
}

export default App
