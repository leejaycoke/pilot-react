import React from 'react';

export default React.memo(
	function Lights() {
		return (
			<>
				<ambientLight intensity={0.3} />
				<directionalLight position={[0, 5, 5]} rotation={[0, 0, 0]} intensity={3} />
				<pointLight position={[-10, -5, 5]} intensity={0.8} color={'red'} />
				<pointLight position={[-5, -5, 5]} intensity={0.8} color={'#bcffb0'} />
				<pointLight position={[-10, 0, 5]} intensity={0.8} color={'red'} />
				<pointLight position={[10, 5, 4]} intensity={0.8} color={'magenta'} />
				<pointLight position={[5, 8, 4]} intensity={0.8} color={'blue'} />
				<pointLight position={[10, -10, 2]} intensity={0.8} color={'coral'} />
				<pointLight position={[3, -10, 2]} intensity={0.8} color={'#411fbf'} />
				<pointLight position={[-10, -10, 2]} intensity={0.8} color={'#c491ed'} />
			</>
		);
	},
	() => true
);
