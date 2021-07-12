import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as Three from 'three';
import { MathUtils } from 'three';
import Phase from '../Phase';

interface IProps {
	setPhase: React.Dispatch<React.SetStateAction<number>>;
	color: string;
	numberOfStars: number;
}

export default // React.memo(
function Warp({ setPhase, color, numberOfStars }: IProps) {
	const position = useRef<Three.BufferAttribute | Three.InterleavedBufferAttribute>(null!);
	const positionArr = useRef<Float32Array | ArrayLike<number>>(null!);
	const velocityArr = useRef<Float32Array | ArrayLike<number>>(null!);
	const [starCount] = useState(numberOfStars);
	const material = useRef<Three.LineBasicMaterial>();
	const lines = useRef<Three.LineSegments<Three.BufferGeometry, Three.LineBasicMaterial>>(null!);
	const init = useRef(true);
	const startWarp = useRef(false);
	const velocity1 = useRef(0.08);
	const velocity2 = useRef(0.08);
	const acceleration1 = useRef(0.00001);
	const acceleration2 = useRef(0.00001);

	if (init.current) {
		const geometry = new Three.BufferGeometry();
		geometry.setAttribute('position', new Three.BufferAttribute(new Float32Array(6 * starCount), 3));
		geometry.setAttribute('velocity', new Three.BufferAttribute(new Float32Array(2 * starCount), 1));

		position.current = geometry.getAttribute('position');
		positionArr.current = position.current.array;
		velocityArr.current = geometry.getAttribute('velocity').array;

		let x, y, z;

		// 0, -30, 2.5);

		for (let index = 0; index < starCount; index++) {
			x = MathUtils.randFloat(-2.5, 2.5);
			y = MathUtils.randFloat(-80, 20);
			z = MathUtils.randFloat(0, 5);
			// @ts-ignore
			positionArr.current[6 * index] = positionArr.current[6 * index + 3] = x;
			// @ts-ignore
			positionArr.current[6 * index + 1] = positionArr.current[6 * index + 4] = y;
			// @ts-ignore
			positionArr.current[6 * index + 2] = positionArr.current[6 * index + 5] = z;
			// @ts-ignore
			velocityArr.current[2 * index] = velocityArr.current[2 * index + 1] = 0;
		}
		material.current = new Three.LineBasicMaterial({
			color,
		});
		lines.current = new Three.LineSegments(geometry, material.current);
		init.current = false;
		setTimeout(() => {
			startWarp.current = true;
		}, MathUtils.randFloat(6000, 6500));
	}

	useFrame(() => {
		if (position.current) {
			for (let index = 0; index < starCount; index++) {
				// @ts-ignore
				velocityArr.current[2 * index] += velocity1.current;
				// @ts-ignore
				velocityArr.current[2 * index + 1] += velocity2.current;

				// @ts-ignore
				positionArr.current[6 * index + 1] += velocityArr.current[2 * index]; //z
				// @ts-ignore
				positionArr.current[6 * index + 4] += velocityArr.current[2 * index + 1]; //z

				if (positionArr.current[6 * index + 4] > 50) {
					// @ts-ignore
					positionArr.current[6 * index + 1] = positionArr.current[6 * index + 4] = MathUtils.randFloat(
						-80,
						20
					);
					// @ts-ignore
					velocityArr.current[2 * index] = velocityArr.current[2 * index + 1] = 0;
				}
			}
			position.current.needsUpdate = true;
		}
		if (startWarp.current) {
			acceleration1.current = acceleration1.current * 1.0298;
			acceleration2.current = acceleration2.current * 1.03;
			velocity1.current = MathUtils.lerp(velocity1.current, 3, acceleration1.current);
			velocity2.current = MathUtils.lerp(velocity2.current, 3, acceleration2.current);
			if (velocity1.current > 3) {
				setPhase(Phase.warp2Complete);
			}
		}
	});

	return <primitive object={lines.current} />;
}
