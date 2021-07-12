import { useEffect, useState } from 'react';
import * as Three from 'three';
import { Canvas as ThreeCanvas, useLoader } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSnackbar } from 'notistack';
import Lights from './Lights';
import Card from './Card';
import Camera from './Camera';
import Skybox from './Skybox';
import Blackhole from './Blackhole';
import Warp from './Warp';
import UserInfoView from './UserInfoView';
import Phase from '../Phase';
import TabIndex from '../TabIndex';
import UserInfo from '../UserInfo';
import Credit from './Credit';

export interface ITextConfig {
	font: Three.Font;
	size: number;
	height: number;
	curveSegments: number;
	bevelEnabled: boolean;
}

type GLTFResult = GLTF & {
	nodes: {
		input: THREE.Mesh;
		underscore: Three.Mesh;
		button: Three.Mesh;
		card: Three.Mesh;
	};
};

export default function Canvas() {
	const { nodes } = useGLTF('/Login.gltf') as GLTFResult;
	const fonts = useLoader(Three.FontLoader, ['font/Godo.json', 'font/D2.json']);
	const blackholeTexture = useLoader(Three.TextureLoader, 'image/blackhole.png');
	const skyboxTexture = useLoader(Three.TextureLoader, [
		'image/skybox/F.jpg', //Right
		'image/skybox/B.jpg', //Left
		'image/skybox/U.jpg', //Above
		'image/skybox/D.jpg', //Under
		'image/skybox/R.jpg', //Front
		'image/skybox/L.jpg', //Back
	]);
	const sfxBuffer = useLoader(Three.AudioLoader, [
		'sfx/fall1.wav',
		'sfx/fall2.wav',
		'sfx/fall3.wav',
		'sfx/fall4.wav',
	]);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [phase, setPhase] = useState(Phase.initial);
	const [focusIndex, setFocusIndex] = useState(TabIndex.none);
	const [textConfig, setTextConfig] = useState<ITextConfig>();
	const [textConfigD2, setTextConfigD2] = useState<ITextConfig>();
	const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

	useEffect(() => {
		setTextConfig({
			font: fonts[0],
			size: 8,
			height: 3,
			curveSegments: 30,
			bevelEnabled: false,
		});
		setTextConfigD2({
			font: fonts[1],
			size: 0.1,
			height: 0.07,
			curveSegments: 30,
			bevelEnabled: false,
		});
		return () => {};
	}, [fonts]);
	useEffect(() => {
		if (phase === Phase.warp1Complete) {
			setTimeout(() => {
				setPhase(Phase.warpToCamPos3);
			}, 10000);
		}
	}, [phase]);

	const handleMissClick = () => {
		setFocusIndex(TabIndex.none);
	};

	return (
		<>
			<div id="canvas-container">
				<ThreeCanvas shadows={true} onPointerMissed={handleMissClick}>
					<color attach="background" args={['black']} />
					<Physics size={100} gravity={[0, -2, 0]}>
						<Camera phase={phase} setPhase={setPhase} />
						{/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
						<Lights />
						<Card
							nodes={nodes}
							enqueueSnackbar={enqueueSnackbar}
							closeSnackbar={closeSnackbar}
							phase={phase}
							setPhase={setPhase}
							focusIndex={focusIndex}
							setFocusIndex={setFocusIndex}
							textConfig={textConfig}
							textConfigD2={textConfigD2}
							setUserInfo={setUserInfo}
							sfxBuffer={sfxBuffer}
						/>
					</Physics>
					<Skybox phase={phase} skyboxTexture={skyboxTexture} />
					<Blackhole blackholeTexture={blackholeTexture} />
					{phase === Phase.warpToCamPos3 && (
						<>
							<Warp setPhase={setPhase} color={'red'} numberOfStars={1000} />
							<Warp setPhase={setPhase} color={'green'} numberOfStars={1000} />
							<Warp setPhase={setPhase} color={'#3333FF'} numberOfStars={1000} />
							<Warp setPhase={setPhase} color={'magenta'} numberOfStars={1000} />
							<Warp setPhase={setPhase} color={'gold'} numberOfStars={1000} />
							<Warp setPhase={setPhase} color={'#BC2525'} numberOfStars={2000} />
							<Warp setPhase={setPhase} color={'#9B45E4'} numberOfStars={2000} />
							<Warp setPhase={setPhase} color={'white'} numberOfStars={3000} />
						</>
					)}
					{userInfo && (
						<UserInfoView
							phase={phase}
							setPhase={setPhase}
							textConfigD2={textConfigD2}
							userInfo={userInfo}
							setUserInfo={setUserInfo}
							button={nodes.button}
						/>
					)}
					{<Credit phase={phase} />}
				</ThreeCanvas>
			</div>
		</>
	);
}

useGLTF.preload('/Login.gltf');
