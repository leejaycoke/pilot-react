import React, { useRef } from 'react';
import * as Three from 'three';
import TabIndex from '../TabIndex';
import Phase from '../Phase';
import { useFrame } from '@react-three/fiber';

export default React.memo(
	function Button({
		phase,
		button,
		buttonDisabled,
		focusIndex,
		handleSubmit,
	}: {
		phase: Phase;
		button: Three.Mesh;
		buttonDisabled: boolean;
		focusIndex: TabIndex;
		handleSubmit: () => void;
	}) {
		const btnMaterialRef = useRef<Three.MeshPhysicalMaterial>(null!);
		const handleButtonEnter = () => {
			if (phase !== Phase.initial) return;
			document.documentElement.style.cursor = 'pointer';
		};
		const handleButtonLeave = () => {
			if (phase !== Phase.initial) return;
			document.documentElement.style.cursor = 'default';
		};
		useFrame(() => {
			if (buttonDisabled)
				return (btnMaterialRef.current.metalness = Three.MathUtils.lerp(
					btnMaterialRef.current.metalness,
					0,
					0.1
				));
			if (focusIndex === TabIndex.button) {
				btnMaterialRef.current.metalness = Three.MathUtils.lerp(btnMaterialRef.current.metalness, 1, 0.1);
			} else {
				btnMaterialRef.current.metalness = Three.MathUtils.lerp(btnMaterialRef.current.metalness, 0.9, 0.1);
			}
		});
		return (
			<mesh
				geometry={button.geometry}
				position={[0, -0.6, 0.1]}
				onClick={handleSubmit}
				onPointerEnter={handleButtonEnter}
				onPointerLeave={handleButtonLeave}
			>
				<meshPhysicalMaterial
					attach="material"
					ref={btnMaterialRef}
					color="rgb(90, 100, 200)"
					roughness={1}
					reflectivity={1}
					metalness={0.5}
					transparent={true}
					opacity={1}
				/>
			</mesh>
		);
	},
	(prev, next) =>
		prev.phase === next.phase && prev.buttonDisabled === next.buttonDisabled && prev.focusIndex === next.focusIndex
	// && prev.handleSubmit === next.handleSubmit
);
