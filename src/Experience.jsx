import { Plane, useTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import {
	Bloom,
	EffectComposer,
	Noise,
	Vignette,
	HueSaturation,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import Wave from "./Wave"
import { useRef, useState } from "react"

function Experience() {
	const viewport = useThree((state) => state.viewport)

	const displacementMap = useTexture("./textures/template1.png")
	const normalMap = useTexture("./textures/template2.png")

	const waveRef = useRef()
	const { uFrequency, uAmplitude, uMousePos } = useControls({
		uFrequency: { value: 0.2, min: 0, max: 10 },
		uAmplitude: { value: 3.7, min: 0, max: 10 },
		uOffset: { value: 0.5, min: 0, max: 30 },
	})

	const [pointerX, setPointerX] = useState()

	useFrame((state) => {
		// let pointerX = setPointerX(Math.round(state.pointer.x))
	})

	return (
		<>
			<EffectComposer>
				<Noise premultiply blendFunction={BlendFunction.MULTIPLY} />
				<Bloom
					mipmapBlur
					intensity={1.8}
					luminanceThreshold={0.9}
					radius={0.9}
				/>
				{/* <Vignette offset={0.01} darkness={0.25} eskil={true} /> */}

				<Wave
					ref={waveRef}
					uFrequency={uFrequency}
					uAmplitude={uAmplitude}
					pointerX={pointerX}
					uMousePos
					blendFunction={BlendFunction.MULTIPLY}
				/>
			</EffectComposer>

			<mesh>
				<Plane scale={[viewport.width, viewport.height, 1]}>
					<meshPhysicalMaterial
						toneMapped={false}
						// color='#101010'
						color={[0.2, 0.2, 0.15]}
						roughness={0.5}
						metalness={0.98}
						displacementMap={displacementMap}
						displacementScale={0.1}
						normalMap={normalMap}
						normalScale={0.25}
					/>
				</Plane>
				<Perf position='top-left' />
			</mesh>
		</>
	)
}

export default Experience
