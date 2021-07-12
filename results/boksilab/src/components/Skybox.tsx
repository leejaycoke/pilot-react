import React, { useEffect, useRef } from 'react';
import * as Three from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Phase from '../Phase';

export default React.memo(
	function Skybox({ phase }: { phase: number }) {
		const bMaterialRef = useRef<Three.MeshBasicMaterial>(null!);
		const skyboxTexture = useTexture([
			'image/skybox/F.jpg', //R
			'image/skybox/B.jpg', //L
			'image/skybox/U.jpg', //U
			'image/skybox/D.jpg', //D
			'image/skybox/R.jpg', //F
			'image/skybox/L.jpg', //B
		]);
		useEffect(() => {
			skyboxTexture[2].center = new Three.Vector2(0.5, 0.5);
			skyboxTexture[2].rotation = Math.PI / 2;
			skyboxTexture[3].center = new Three.Vector2(0.5, 0.5);
			skyboxTexture[3].rotation = -Math.PI / 2;
		}, []);
		useFrame(() => {
			if (phase === Phase.warpToCamPos2)
				bMaterialRef.current.opacity = Three.MathUtils.lerp(bMaterialRef.current.opacity, 1, 0.008);
		});
		return (
			<mesh>
				<boxGeometry attach="geometry" args={[30, 30, 30]} />
				<meshBasicMaterial attachArray="material" side={Three.BackSide} map={skyboxTexture[0]} />
				<meshBasicMaterial attachArray="material" side={Three.BackSide} map={skyboxTexture[1]} />
				<meshBasicMaterial attachArray="material" side={Three.BackSide} map={skyboxTexture[2]} />
				<meshBasicMaterial attachArray="material" side={Three.BackSide} map={skyboxTexture[3]} />
				<meshBasicMaterial attachArray="material" side={Three.BackSide} map={skyboxTexture[4]} />
				<meshBasicMaterial
					ref={bMaterialRef}
					attachArray="material"
					side={Three.BackSide}
					map={skyboxTexture[5]}
					opacity={0}
					transparent={true}
				/>
			</mesh>
		);
	},
	(prev, next) => prev.phase === next.phase
);
