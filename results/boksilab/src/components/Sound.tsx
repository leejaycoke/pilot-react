import React, { useRef, useState, useEffect } from 'react';
import * as Three from 'three';
import { useThree } from '@react-three/fiber';
import { MathUtils } from 'three';

export default function PositionalAudioScene({
	sfxBuffer,
	distance,
	play,
}: {
	sfxBuffer: AudioBuffer[];
	distance: number;
	play: boolean;
}) {
	const sound = useRef<Three.PositionalAudio>();
	const { camera } = useThree();
	const [listener] = useState(() => new Three.AudioListener());

	useEffect(() => {
		sound.current?.setBuffer(sfxBuffer[MathUtils.randInt(0, 3)]);
		sound.current?.setRefDistance(distance);
		sound.current?.setVolume(0.2);
		camera.add(listener);
		return () => {
			camera.remove(listener);
		};
	}, []);
	useEffect(() => {
		if (play) {
			sound.current?.play();
		}
	}, [play]);
	return (
		<>
			<React.Suspense fallback={null}>
				<positionalAudio ref={sound} args={[listener]} />
			</React.Suspense>
		</>
	);
}
