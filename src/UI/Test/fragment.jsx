const fragmentShader = /* glsl */ `

uniform vec3 colorA;

varying vec3 vColor;
varying vec3 vPos;

void main() {
  gl_FragColor.rgb = colorA + vPos.z;
  gl_FragColor.a = 0.8;
}

`

export default fragmentShader
