import React, { useRef, useEffect } from 'react';
import { MathUtils, Mesh, PointLight } from 'three';
import { useFrame } from '@react-three/fiber';
import TextStatic from './TextStatic';
import { ITextConfig } from './Canvas';
import UserInfo from '../UserInfo';
import LogoutButton from './LogoutButton';
import Phase from '../Phase';

export default function UserInfoView({
	phase,
	setPhase,
	textConfigD2,
	userInfo,
	button,
	setUserInfo,
}: {
	phase: number;
	setPhase: React.Dispatch<React.SetStateAction<number>>;
	textConfigD2: ITextConfig | undefined;
	userInfo: UserInfo | undefined;
	button: Mesh;
	setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}) {
	const mesh = useRef<Mesh>(null!);
	useEffect(() => {
		if (phase === Phase.warp2Complete) {
			mesh.current?.position.setY(-37);
		}
	}, [phase]);

	const light1 = useRef<PointLight>(null!);
	const light2 = useRef<PointLight>(null!);
	useFrame(({ clock }) => {
		if (phase === Phase.warp2Complete) {
			light1.current.position.set(
				MathUtils.lerp(light1.current.position.x, Math.sin(clock.elapsedTime) * 3, 0.1),
				light1.current.position.y,
				MathUtils.lerp(light1.current.position.z, Math.cos(clock.elapsedTime) * 3 + 2.5, 0.1)
			);
			light2.current.position.set(
				MathUtils.lerp(light2.current.position.x, Math.sin(clock.elapsedTime + Math.PI) * 3, 0.1),
				light2.current.position.y,
				MathUtils.lerp(light2.current.position.z, Math.cos(clock.elapsedTime + Math.PI) * 3 + 2.5, 0.1)
			);

			light1.current.intensity = MathUtils.lerp(light1.current.intensity, 5, 0.01);
			light2.current.intensity = MathUtils.lerp(light2.current.intensity, 5, 0.01);
		}
	});
	return (
		<>
			<mesh ref={mesh} position={[0, -36, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[50, 50]} />
				<meshBasicMaterial color="black" />
			</mesh>
			<pointLight ref={light1} color="violet" intensity={1} position={[1, -35, 5]} rotation={[0, 0, 0]} />
			<pointLight ref={light2} color="coral" intensity={1} position={[1, -35, 5]} rotation={[0, 0, 0]} />
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.5, -37, 1.5]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={'ACCOUNT:'}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[0.07, -37, 1.5]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={userInfo?.account || ''}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.5, -37, 2]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={'ID:'}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.27, -37, 2]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={userInfo?.id?.toString() || ''}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.5, -37, 2.5]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={'name:'}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.13, -37, 2.5]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={userInfo?.name || ''}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.5, -37, 3]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={'level:'}
			/>
			<TextStatic
				color="#666"
				config={textConfigD2}
				position={[-0.05, -37, 3]}
				rotation={[-Math.PI / 2, 0, 0]}
				size={100}
				children={userInfo?.level?.toString() || ''}
			/>
			<LogoutButton
				button={button}
				phase={phase}
				setPhase={setPhase}
				setUserInfo={setUserInfo}
				textConfigD2={textConfigD2}
			/>
		</>
	);
}
