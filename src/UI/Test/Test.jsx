import * as THREE from "three"
import { useRef } from "react"
import { useFrame, useLoader, extend, useThree } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import vertexShader from "./vertex"
import fragmentShader from "./fragment"
// import { Vector2 } from "three"
// import vertexShader from "./vertexShader"
// import fragmentShader from "./fragmentShader"

const ImageShaderMaterial = shaderMaterial(
	{
		// uTime: 0,
		time: 0,
		uMouse: new THREE.Vector2(),
		uTexture: new THREE.Texture(),
		colorA: new THREE.Color(0xe04de8),
	},
	vertexShader,
	fragmentShader
)
extend({ ImageShaderMaterial })

const Test = () => {
	const { viewport } = useThree()
	console.log(viewport)
	// const texture2 = "./img/work-preview-folkeeventyr.png"
	const ref = useRef()
	const [image] = useLoader(THREE.TextureLoader, [
		"./img/work-preview-folkeeventyr.png",
	])

	useFrame(({ mouse }) => {
		console.log(ref.current)
		// const x =
	})

	return (
		<mesh ref={ref} scale={10}>
			<planeGeometry args={[0.4, 0.6, 16, 16]} />
			{/* <meshBasicMaterial /> */}
			{/* <WaveShaderMaterial uColor={"hotpink"} ref={ref} /> */}
			<imageShaderMaterial uTexture={image} uTime={0} uMouse={0} />
			{/* <shaderMaterial
				uniforms={{
					uTime: { value: 0.0 },
					uTexture: { value: new THREE.TextureLoader().load(img) },
				}}
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				// wireframe={true}
			/> */}
		</mesh>
	)
}

export default Test
