import { Effect, BlendFunction } from "postprocessing"
import { Uniform } from "three"

const fragmentShader = /* glsl */ `
	uniform float uFrequency;
	uniform float uAmplitude;
	uniform float uOffset;
	uniform float pointerX;

	void mainUv(inout vec2 uv) {
		uv.y += sin(uv.y * uFrequency + uOffset) * uAmplitude;
		uv.x += sin(uv.x * uFrequency + uOffset) * uAmplitude;
	}

	void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
		outputColor = vec4(.8, 1., .5, inputColor.a);
	}
`

export default class WaveEffect extends Effect {
	constructor({
		uFrequency,
		uAmplitude,
		uOffset,
		pointerX,
		blendFunction = blendFunction.MULTIPLY,
	}) {
		super("WaveEffect", fragmentShader, {
			blendFunction,
			uniforms: new Map([
				["uFrequency", new Uniform(uFrequency)],
				["uAmplitude", new Uniform(uAmplitude)],
				["uOffset", new Uniform(uOffset)],
				["pointerX", new Uniform(pointerX)],
			]),
		})
	}

	update(renderer, inputBuffer, deltaTime) {
		this.uniforms.get("uOffset").value += deltaTime
	}
}
