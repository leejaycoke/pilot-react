import React from 'react';
import { ITextConfig } from './Canvas';

interface IProps {
	config: ITextConfig | undefined;
	children: string;
	position?: number[];
	rotation?: number[];
	color?: string;
	size?: number;
}

export default React.memo(
	function TextStatic({ config, position, rotation, children, color = 'black', size = 1 }: IProps) {
		return (
			// @ts-ignore
			<group position={position} rotation={rotation} scale={[0.01 * size, 0.01 * size, 0.01 * size]}>
				{config && (
					<mesh>
						<textGeometry args={[children, config]} />
						<meshPhysicalMaterial color={color} roughness={0.4} reflectivity={0.4} metalness={0.7} />
					</mesh>
				)}
			</group>
		);
	},
	(prev, next) => prev.config === next.config && prev.position === next.position
);
