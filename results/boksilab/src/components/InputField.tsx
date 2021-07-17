import React, { useState, useRef } from 'react';
import * as Three from 'three';
import Fiber, { useFrame } from '@react-three/fiber';
import TabIndex from '../TabIndex';
import Phase from '../Phase';
import { Triplet, useBox } from '@react-three/cannon';

export default React.memo(
	function InputField({
		phase,
		input,
		underscore,
		focusIndex,
		setFocusIndex,
	}: {
		phase: Phase;
		input: Three.Mesh;
		underscore: Three.Mesh;
		focusIndex: TabIndex;
		setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
	}) {
		const [inputMaterial] = useState(() => new Three.MeshBasicMaterial({ visible: false }));
		const usMaterial1Ref = useRef<Three.MeshPhysicalMaterial>(null!);
		const usMaterial2Ref = useRef<Three.MeshPhysicalMaterial>(null!);
		const [usArgs] = useState<Triplet>(() => [1.3, 0.01, 0.5]);
		const [us1Position] = useState<Triplet>(() => [0, 0.2, 0.2]);
		const [us2Position] = useState<Triplet>(() => [0, -0.24, 0.2]);

		const [us1Ref] = useBox(() => ({
			position: us1Position,
			mass: 100,
			type: 'Static',
			args: usArgs,
		}));
		const [us2Ref] = useBox(() => ({
			position: us2Position,
			mass: 100,
			type: 'Static',
			args: usArgs,
		}));

		const handleInputClick = (e: Fiber.ThreeEvent<MouseEvent>) => {
			if (phase !== Phase.initial) return;
			//@ts-ignore
			setFocusIndex(TabIndex[e.eventObject.name]);
		};
		const handleInputFieldEnter = () => {
			if (phase !== Phase.initial) return;
			document.documentElement.style.cursor = 'text';
		};
		const handleInputFieldLeave = () => {
			if (phase !== Phase.initial) return;
			document.documentElement.style.cursor = 'default';
		};

		useFrame(() => {
			switch (focusIndex) {
				case TabIndex.input1:
					usMaterial1Ref.current.opacity = Three.MathUtils.lerp(usMaterial1Ref.current.opacity, 1, 0.1);
					usMaterial2Ref.current.opacity = Three.MathUtils.lerp(usMaterial2Ref.current.opacity, 0.4, 0.1);
					break;
				case TabIndex.input2:
					usMaterial1Ref.current.opacity = Three.MathUtils.lerp(usMaterial1Ref.current.opacity, 0.4, 0.1);
					usMaterial2Ref.current.opacity = Three.MathUtils.lerp(usMaterial2Ref.current.opacity, 1, 0.1);
					break;
				default:
					usMaterial1Ref.current.opacity = Three.MathUtils.lerp(usMaterial1Ref.current.opacity, 0.4, 0.1);
					usMaterial2Ref.current.opacity = Three.MathUtils.lerp(usMaterial2Ref.current.opacity, 0.4, 0.1);
			}
		});

		return (
			<>
				<mesh
					name="input1"
					geometry={input.geometry}
					material={inputMaterial}
					position={[0, 0.3, 0]}
					onClick={handleInputClick}
					onPointerEnter={handleInputFieldEnter}
					onPointerLeave={handleInputFieldLeave}
				/>
				<mesh
					name="input2"
					geometry={input.geometry}
					material={inputMaterial}
					position={[0, -0.15, 0]}
					onClick={handleInputClick}
					onPointerEnter={handleInputFieldEnter}
					onPointerLeave={handleInputFieldLeave}
				/>
				<mesh ref={us1Ref} geometry={underscore.geometry} position={us1Position}>
					<meshPhysicalMaterial
						ref={usMaterial1Ref}
						color="rgb(31, 152, 173)"
						roughness={0.2}
						reflectivity={1}
						metalness={0.8}
						transparent={true}
						opacity={0.4}
					/>
				</mesh>
				<mesh ref={us2Ref} geometry={underscore.geometry} position={us2Position}>
					<meshPhysicalMaterial
						ref={usMaterial2Ref}
						color="rgb(31, 152, 173)"
						roughness={0.2}
						reflectivity={1}
						metalness={0.8}
						transparent={true}
						opacity={0.4}
					/>
				</mesh>
			</>
		);
	},
	(prev, next) => prev.focusIndex === next.focusIndex && prev.phase === next.phase
);
