#version 330 compatibility

uniform float uKa, uKd, uKs; // coefficients of each type of lighting
uniform vec3 uColor; // object color
uniform vec3 uSpecularColor; // light color
uniform float uShininess; // specular exponent
uniform float uTime;
const float PI = 3.14159;

uniform bool fragPattern;
uniform bool vertPattern;

in vec2 vST; // texture cords
in vec3 vN; // normal vector
in vec3 vL; // vector from point to light
in vec3 vE; // vector from point to eye

void
main( )
{
    vec3 Normal = normalize(vN);
    vec3 Light = normalize(vL);
    vec3 Eye = normalize(vE);
    vec3 myColor = uColor;

	if(fragPattern)
	{
		if( vST.s >= .1 && vST.s <= ((cos(uTime * PI))) ) 
		{
			myColor = vec3( cos(uTime), cos(5. * uTime), 0 );
		}
	}

	if(vertPattern)
	{
		if( vST.s >= .1 && vST.s <= ((sin(uTime * PI))) ) 
		{
			myColor = vec3( cos(5. * uTime),  uTime, 0 );
		}
	}
    vec3 ambient = uKa * myColor;
    float d = max( dot(Normal,Light), 0. ); //we will only do the diffuse if the light can see the point
    myColor = uColor;
    myColor = vec3( .6, .4, .9 );

    vec3 diffuse = uKd * d * myColor;
    gl_FragColor = vec4( ambient + diffuse, .25 );
}