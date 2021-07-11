import * as React from 'react';
import * as Three from 'three';
import { OrbitControls, PositionalAudio } from '@react-three/drei';

export default function PositionalAudioScene() {
	const listener = new Three.AudioListener();
	const args = React.useMemo(
		() => [
			{
				position: new Three.Vector3(10, 0, 10),
				url: 'sfx/fall1.wav',
			},
			{
				position: new Three.Vector3(-10, 0, 10),
				url: 'sfx/fall2.wav',
			},
			{
				position: new Three.Vector3(10, 0, -10),
				url: 'sfx/fall3.wav',
			},
			{
				position: new Three.Vector3(-10, 0, -10),
				url: 'sfx/fall4.wav',
			},
		],
		[]
	);

	return (
		<>
			<React.Suspense fallback={null}>
				<group position={[0, 0, 5]}>
					{args.map(({ position, url }, index) => (
						<mesh key={`0${index}`} position={position}>
							<sphereBufferGeometry attach="geometry" />
							<meshBasicMaterial wireframe attach="material" color="hotpink" />
							<PositionalAudio url={'sfx/fall1.wav'} loop={true} distance={100} />
						</mesh>
					))}
				</group>
			</React.Suspense>
		</>
	);
}
