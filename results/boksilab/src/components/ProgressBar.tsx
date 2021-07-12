import { useProgress } from '@react-three/drei';

// interface asset {
// 	[key: string]: {
// 		total: number;
// 		loaded: number;
// 		progress: number;
// 	};
// }
const numOfAssets = 16;
export default function ProgressBar() {
	// const { item, total, progress, loaded } = useProgress();
	const { loaded } = useProgress();

	return (
		<div>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%,-50%)',
					border: 'none',
					boxShadow: 'inset 0 0 10px -2px white',
					borderRadius: '10px',
					width: '400px',
					height: '30px',
					overflow: 'hidden',
					padding: 0,
				}}
			>
				<div
					style={{
						position: 'relative',
						display: 'table',
						height: '100%',
						left: '0',
						width: `${(loaded / numOfAssets) * 100}%`,
						minWidth: '25px',
						background: 'white',
						transition: 'width 3s cubic-bezier(0,.93,.28,.96)',
						margin: 0,
						textAlign: 'right',
					}}
				>
					<span style={{ display: 'table-cell', verticalAlign: 'middle' }}>🚀</span>
				</div>
			</div>
		</div>
	);
}
