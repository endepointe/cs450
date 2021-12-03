#version 330 compatibility

uniform float	fTime;
in vec2  	vST;		// texture coords

void
main( )
{
	vec3 myColor = vec3( vST.s * (sin(fTime)), vST.t * abs(sin(fTime)), 1.0 );

	gl_FragColor = vec4( myColor,  1. );
}