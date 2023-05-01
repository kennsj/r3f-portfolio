const vertexShader = /* glsl */ `
#define AMP 0.2
#define FREQ 10.0
#define PI 3.14159265359

uniform float time;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPos;

void main() {
  vec2 vUv = uv;
  vec3 pos = position;

  float dist = distance(uv, uMouse);
  float decay = clamp(dist * 5.0, 1.0, 10.0);

  float ripple = sin(-PI * FREQ * dist + time) * (AMP/ decay);

  pos.z = ripple;
  vPos.z = pos.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

`

export default vertexShader
