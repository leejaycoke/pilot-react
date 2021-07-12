import { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import Phase from '../Phase';

export default function Credit({ phase }: { phase: number }) {
	const [opacity, setOpacity] = useState('0');
	useEffect(() => {
		if (phase === Phase.warp2Complete)
			setTimeout(() => {
				setOpacity('1');
			}, 1000);
		else setOpacity('0');
	}, [phase]);
	return (
		<Html
			calculatePosition={(obj, cam, size) => {
				return [10, 10];
			}}
		>
			<div
				id="credit"
				style={{
					opacity,
					fontSize: '0.7rem',
					color: 'white',
					backgroundColor: 'rgba(10,10,10,0.8)',
					borderRadius: '10px',
					padding: '10px',
					width: '280px',
					bottom: '1px',
					transition: 'all 1s',
				}}
			>
				<div style={{ padding: '3px' }}>
					Icons made by{' '}
					<a style={{ color: 'coral' }} href="https://www.flaticon.com/authors/roundicons" title="Roundicons">
						Roundicons
					</a>{' '}
					from{' '}
					<a style={{ color: 'coral' }} href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
				<div style={{ padding: '3px' }}>
					Skybox designed by{' '}
					<a style={{ color: 'coral' }} href="https://www.pulsarbytes.com/" title="Pulsar Bytes">
						Pulsar Bytes
					</a>
				</div>
				<div style={{ padding: '3px' }}>
					Cartoon Falling Sound Effect created by{' '}
					<a
						style={{ color: 'coral' }}
						href="https://orangefreesounds.com/cartoon-falling-sound-effect/"
						title="Alexander"
					>
						Alexander
					</a>
				</div>
			</div>
		</Html>
	);
}
