import React, { useRef } from 'react';
import * as Three from 'three';
import { useFrame } from '@react-three/fiber';

export default React.memo(
	function Blackhole({ blackholeTexture }: { blackholeTexture: Three.Texture }) {
		const mesh = useRef<Three.Mesh>(null!);
		const geometry = useRef<Three.PlaneGeometry>(null!);
		const material = useRef<Three.MeshPhysicalMaterial>(null!);
		useFrame(() => {
			mesh.current.rotation.z -= 0.003;
		});
		return (
			<mesh ref={mesh} rotation={[Math.PI / 2, 0, 0]} position={[0, -10, 2.5]}>
				<planeGeometry ref={geometry} attach="geometry" args={[50, 50]} />
				<meshPhysicalMaterial
					ref={material}
					attach="material"
					side={Three.BackSide}
					map={blackholeTexture}
					transparent={true}
					opacity={0.5}
					transmission={0.93}
					reflectivity={0}
					roughness={1}
					alphaMap={blackholeTexture}
					alphaTest={0.1}
					// displacementMap={blackholeTexture}
					// displacementScale={-1.5}
					// displacementBias={1.5}
				/>
			</mesh>
		);
	},
	() => true
);
