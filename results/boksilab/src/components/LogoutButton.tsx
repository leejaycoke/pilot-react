import React, { useRef, useEffect } from 'react';
import * as Three from 'three';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import TextStatic from './TextStatic';
import { ITextConfig } from './Canvas';
import Phase from '../Phase';
import UserInfo from '../UserInfo';

interface IProps {
	button: Three.Mesh;
	phase: number;
	textConfigD2: ITextConfig | undefined;
	setPhase: React.Dispatch<React.SetStateAction<number>>;
	setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}

export default function LogoutButton({ button, phase, setPhase, textConfigD2, setUserInfo }: IProps) {
	const btnMaterialRef = useRef<Three.MeshPhysicalMaterial>(null!);
	const groupRef = useRef<Three.Group>(null!);
	const color = useRef(new Three.Color());
	const hover = useRef(false);
	const handleButtonEnter = () => {
		document.documentElement.style.cursor = 'pointer';
		hover.current = true;
	};
	const handleButtonLeave = () => {
		document.documentElement.style.cursor = 'default';
		hover.current = false;
	};
	const handleLogout = () => {
		setUserInfo(undefined);
		setPhase(Phase.initial);
		const title = document.querySelector('#title');
		if (title) title.innerHTML = '로그인';
	};
	useFrame(() => {
		if (hover.current) {
			color.current.r = MathUtils.lerp(color.current.r, 0.005, 0.1);
			color.current.g = MathUtils.lerp(color.current.g, 0.015, 0.1);
			color.current.b = MathUtils.lerp(color.current.b, 0.08, 0.1);
			btnMaterialRef.current.color = color.current;
		} else {
			color.current.r = MathUtils.lerp(color.current.r, 0.03, 0.1);
			color.current.g = MathUtils.lerp(color.current.g, 0.09, 0.1);
			color.current.b = MathUtils.lerp(color.current.b, 0.3, 0.1);
			btnMaterialRef.current.color = color.current;
		}
	});
	useEffect(() => {
		if (phase === Phase.warp2Complete) {
			groupRef.current.position.setY(0);
		}
	}, [phase]);
	return (
		<>
			<group ref={groupRef} position={[0, -1, 0]}>
				<mesh
					geometry={button.geometry}
					position={[-0.03, -36.95, 3.4]}
					rotation={[Math.PI / 2, 0, 0]}
					onClick={handleLogout}
					onPointerEnter={handleButtonEnter}
					onPointerLeave={handleButtonLeave}
					scale={[0.9, 0.9, 0.9]}
				>
					<meshPhysicalMaterial
						attach="material"
						ref={btnMaterialRef}
						color={color.current}
						roughness={1}
						reflectivity={1}
						metalness={0.5}
						transparent={true}
						opacity={1}
					/>
				</mesh>
				<TextStatic
					color="#666"
					config={textConfigD2}
					position={[-0.24, -36.85, 3.42]}
					rotation={[-Math.PI / 2, 0, 0]}
					size={70}
					children="로그아웃"
				/>
			</group>
		</>
	);
}
