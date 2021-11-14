#version 330 compatibility



uniform float	vTime;
out vec2  	vST;
const float PI = 	3.14159265;
const float W = 	8.;

const vec3 LightPosition = vec3( 2., 0., 2. );

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vST.s += cos((vST.s) * W + (vTime));
	vST.t += sin((vST.t) * W + (vTime * 10.));
	gl_Position = gl_ModelViewProjectionMatrix * vec4( gl_Vertex.xyz, 1. );
}
