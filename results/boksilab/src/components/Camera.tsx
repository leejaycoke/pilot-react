import { useRef, useState, useEffect } from 'react';
import * as Three from 'three';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Phase from '../Phase';
import { MathUtils } from 'three';

export default function Camera({
	phase,
	setPhase,
}: {
	phase: number;
	setPhase: React.Dispatch<React.SetStateAction<number>>;
}) {
	const camera = useRef<Three.PerspectiveCamera>(null!);
	const [camPos1] = useState(() => {
		return new Three.Vector3(0, 0, 50);
	});
	const [camPos2] = useState(() => {
		return new Three.Vector3(2, 1.5, 1.4);
	});
	const [camPos3] = useState(() => {
		return new Three.Vector3(0, -30, 2.5);
	});
	const [camTarget] = useState(() => {
		return new Three.Vector3(0, 0, 0);
	});
	const [fovInitial] = useState(() => 5);
	const [fovWarp] = useState(() => 100);
	const [initialVelocity] = useState(() => 0.000001);
	const velocity = useRef(initialVelocity);
	const camShakeIntensity = useRef(1);
	const camShakeX = useRef(0);
	const camShakeY = useRef(0);
	const camShakeZ = useRef(0);
	const revertCamShakeIntensity = useRef(false);
	const camRotation = useRef(1);

	useEffect(() => {
		camera.current?.lookAt(camTarget);
	}, []);
	useFrame(() => {
		switch (phase) {
			case Phase.initial: {
				camera.current?.position.lerp(camPos1, 1);
				camTarget.set(
					MathUtils.lerp(camTarget.x, 0, 1),
					MathUtils.lerp(camTarget.y, 0, 1),
					MathUtils.lerp(camTarget.z, 0, 1)
				);
				camera.current?.lookAt(camTarget);
				camera.current.fov = MathUtils.lerp(camera.current.fov, fovInitial, 1);
				camera.current.updateProjectionMatrix();
				break;
			}
			case Phase.warpToCamPos2: {
				if (velocity.current >= 0.35) {
					setPhase(Phase.warp1Complete);
					velocity.current = 0.0005;
					camRotation.current = camera.current.rotation.z;
				}
				camShakeX.current = MathUtils.randFloat(-0.04, 0.04) * camShakeIntensity.current;
				camShakeY.current = MathUtils.randFloat(-0.04, 0.04) * camShakeIntensity.current;
				camShakeZ.current = MathUtils.randFloat(-0.04, 0.04) * camShakeIntensity.current;
				if (camShakeIntensity.current >= 550 && !revertCamShakeIntensity.current) {
					revertCamShakeIntensity.current = true;
				}
				if (revertCamShakeIntensity.current) {
					camShakeIntensity.current /= 1.055;
				} else {
					camShakeIntensity.current *= 1.014;
				}
				velocity.current *= 1.02;

				camera.current?.position.lerp(camPos2, velocity.current * 2.5);
				camTarget.set(
					MathUtils.lerp(camTarget.x, -2.5 + camShakeX.current, velocity.current),
					MathUtils.lerp(camTarget.y, -3 + camShakeY.current, velocity.current),
					MathUtils.lerp(camTarget.z, 1 + camShakeZ.current, velocity.current)
				);
				camera.current?.lookAt(camTarget);
				camera.current.fov = MathUtils.lerp(camera.current.fov, fovWarp, velocity.current);
				camera.current.updateProjectionMatrix();
				break;
			}
			case Phase.warpToCamPos3: {
				camera.current?.position.set(
					MathUtils.lerp(camera.current?.position.x, camPos3.x, velocity.current * 6),
					MathUtils.lerp(camera.current?.position.y, camPos3.y, velocity.current),
					MathUtils.lerp(camera.current?.position.z, camPos3.z, velocity.current * 6)
				);
				camTarget.set(
					MathUtils.lerp(camTarget.x, 0, velocity.current * 5),
					MathUtils.lerp(camTarget.y, -50, velocity.current * 3),
					MathUtils.lerp(camTarget.z, 2.5, velocity.current * 5)
				);
				camera.current?.lookAt(camTarget);
				camera.current.rotation.z = camRotation.current *= 1.004;
				camera.current.fov = MathUtils.lerp(camera.current.fov, 165, velocity.current * 5);
				camera.current.updateProjectionMatrix();
				velocity.current *= 1.004;
				break;
			}
			case Phase.warp2Complete: {
				velocity.current = initialVelocity;
				camShakeIntensity.current = 1;
				revertCamShakeIntensity.current = false;
				camShakeX.current = 0;
				camShakeY.current = 0;
				camShakeZ.current = 0;
				camRotation.current = 1;
				camera.current.rotation.z = 0;
				camera.current.position.setY(-33);
				camera.current.position.setZ(2.6);
				// camera.current.rotation.x = -Math.PI / 2;
				camera.current.fov = 60;
				camera.current.updateProjectionMatrix();
				break;
			}
			case Phase.error: {
				camTarget.set(
					MathUtils.lerp(camTarget.x, MathUtils.randFloat(-0.02, 0.02), 1),
					MathUtils.lerp(camTarget.y, MathUtils.randFloat(-0.02, 0.02), 1),
					MathUtils.lerp(camTarget.z, MathUtils.randFloat(-0.02, 0.02), 1)
				);
				camera.current?.lookAt(camTarget);
			}
		}
	});
	return <PerspectiveCamera makeDefault ref={camera} name="camera" position={camPos1} fov={fovInitial} />;
}
