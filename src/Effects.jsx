import {
	Bloom,
	EffectComposer,
	Noise,
	Vignette,
} from "@react-three/postprocessing"
import { useRef } from "react"
import { BlendFunction } from "postprocessing"
import { useControls } from "leva"
import Wave from "./Wave"

const Effects = (props) => {
	const waveRef = useRef()

	const { uFrequency, uAmplitude, uMousePos } = useControls({
		uFrequency: { value: 4.66, min: 0, max: 20, step: 0.01 },
		uAmplitude: { value: 0.36, min: 0, max: 1, step: 0.01 },
		uOffset: { value: 0.5, min: 0, max: 30, step: 0.01 },
	})

	return (
		<EffectComposer disableNormalPass multisampling={false}>
			{/* <Noise premultiply blendFunction={BlendFunction.DARKEN} opacity={0.4} /> */}
			<Bloom mipmapBlur intensity={1.8} luminanceThreshold={0.9} radius={0.9} />
			<Vignette offset={0.1} darkness={0.95} eskil={true} />

			<Wave
				ref={waveRef}
				uFrequency={uFrequency}
				uAmplitude={uAmplitude}
				uMousePos
				blendFunction={BlendFunction.MULTIPLY}
			/>
		</EffectComposer>
	)
}

export default Effects
