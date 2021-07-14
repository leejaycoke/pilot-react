import * as Three from 'three';
import { useEffect, useState, useRef } from 'react';
import { ITextConfig } from './Canvas';
import Character from './Character';

interface IProps {
	config: ITextConfig | undefined;
	children: string;
	position?: number[];
	color?: string;
	size?: number;
	hideValue?: boolean;
	pointer: boolean;
	phase: number;
	sfxBuffer: AudioBuffer[];
}

export default function Text({
	config,
	position,
	children,
	color = 'black',
	size = 1,
	hideValue,
	pointer,
	phase,
	sfxBuffer,
}: IProps) {
	const pointerRef = useRef<Three.Mesh>(null!);
	const blinkInterval = useRef<NodeJS.Timeout>(null!);
	const [values, setValues] = useState<string[]>([]);

	useEffect(() => {
		if (pointerRef.current)
			if (pointer) {
				pointerRef.current.visible = true;
				blinkInterval.current = setInterval(() => {
					pointerRef.current.visible = !pointerRef.current.visible;
				}, 500);
			} else {
				clearInterval(blinkInterval.current);
				pointerRef.current.visible = false;
			}
	}, [pointer]);
	useEffect(() => {
		return () => {
			clearInterval(blinkInterval.current);
		};
	}, []);

	useEffect(() => {
		hideValue ? setValues('*'.repeat(children.length).split('')) : setValues(children.split(''));
	}, [children]);
	return (
		<>
			{values.map((char, index) => (
				<Character
					key={index}
					config={config}
					value={char}
					position={[index * 0.075 - 0.6, hideValue ? -0.19 : 0.26, 0.35]}
					color={color}
					phase={phase}
					sfxBuffer={sfxBuffer}
				/>
			))}
			{config && (
				<mesh
					ref={pointerRef}
					position={[values.length * 0.075 - 0.66, hideValue ? -0.19 : 0.26, 0.35]}
					visible={false}
				>
					{/* @ts-ignore */}
					<textGeometry args={['ㅣ', config]} />
					<meshPhysicalMaterial
						color={color}
						roughness={0.4}
						reflectivity={0.4}
						metalness={0.7}
						opacity={1}
					/>
				</mesh>
			)}
		</>
	);
}
