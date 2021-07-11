import React from 'react';
import TextStatic from './TextStatic';
import { ITextConfig } from './Canvas';

export default React.memo(
	function StaticText({ textConfig }: { textConfig: ITextConfig | undefined }) {
		return (
			<>
				<TextStatic
					config={textConfig}
					position={[-0.175, 0.8, 0.09]}
					color="#333"
					size={1.2}
					children="로그인"
				/>
				<TextStatic
					config={textConfig}
					position={[-0.64, 0.6, 0.1]}
					color="#333"
					size={0.8}
					children="아이디와"
				/>
				<TextStatic
					config={textConfig}
					position={[-0.29, 0.6, 0.1]}
					color="#333"
					size={0.8}
					children="패스워드를"
				/>
				<TextStatic config={textConfig} position={[0.14, 0.6, 0.1]} color="#333" size={0.8} children="입력해" />
				<TextStatic config={textConfig} position={[0.41, 0.6, 0.1]} color="#333" size={0.8} children="주세요" />
				<TextStatic
					config={textConfig}
					position={[-0.145, -0.635, 0.14]}
					color="#e6ffea"
					size={1}
					children="로그인"
				/>
			</>
		);
	},
	(prev, next) => prev.textConfig === next.textConfig
);
