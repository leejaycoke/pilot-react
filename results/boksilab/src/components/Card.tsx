import React, { useState, useRef, useEffect } from 'react';
import { SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack';
import * as Three from 'three';
import InputField from './InputField';
import Button from './Button';
import Text from './Text';
import StaticText from './StaticText';
import TabIndex from '../TabIndex';
import Phase from '../Phase';
import UserInfo from '../UserInfo';
import { login, getUserInfo } from '../Api';
import { ITextConfig } from './Canvas';

interface IProps {
	nodes: {
		input: THREE.Mesh;
		underscore: Three.Mesh;
		button: Three.Mesh;
		card: Three.Mesh;
	};
	phase: number;
	setPhase: React.Dispatch<React.SetStateAction<number>>;
	focusIndex: number;
	setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
	enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey;
	closeSnackbar: (key?: SnackbarKey | undefined) => void;
	textConfig: ITextConfig | undefined;
	textConfigD2: ITextConfig | undefined;
	setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}
export default function Card({
	nodes,
	phase,
	setPhase,
	focusIndex,
	setFocusIndex,
	enqueueSnackbar,
	textConfig,
	textConfigD2,
	setUserInfo,
}: IProps) {
	const [userId, setUserId] = useState('');
	const [userPw, setUserPw] = useState('');

	const [buttonDisabled, setButtonDisabled] = useState(false);
	const userIdRef = useRef(userId);
	const userPwRef = useRef(userPw);
	const focusIndexRef = useRef(focusIndex);
	const phaseRef = useRef(phase);

	const handleSubmit = async () => {
		if (phase !== Phase.initial) return;
		setFocusIndex(TabIndex.button);
		setButtonDisabled(true);
		document.documentElement.style.cursor = 'default';

		setPhase(Phase.pending);
		const loginResponse = await login(new UserInfo(userIdRef.current, userPwRef.current));
		if (loginResponse?.type === 'rejected') {
			enqueueSnackbar(loginResponse.message, { variant: 'error' });
			setPhase(Phase.error);
			setTimeout(() => {
				setButtonDisabled(false);
				setFocusIndex(TabIndex.none);
				setPhase(Phase.initial);
			}, 350);
		} else if (loginResponse?.type === 'fulfilled') {
			const InfoResponse = await getUserInfo(loginResponse.token);
			if (InfoResponse.type === 'rejected') {
				enqueueSnackbar(InfoResponse.message, { variant: 'error' });
				setPhase(Phase.error);
				setTimeout(() => {
					setButtonDisabled(false);
					setFocusIndex(TabIndex.none);
					setPhase(Phase.initial);
				}, 350);
			} else if (InfoResponse.type === 'fulfilled') {
				setUserInfo(InfoResponse.userInfo);
				setPhase(Phase.warpToCamPos2);
			}
		}
	};
	function handleType(e: KeyboardEvent) {
		if (phaseRef.current !== Phase.initial) return e.preventDefault();
		if (e.key === 'Enter') {
			return handleSubmit();
		} else if (e.key === 'Backspace') {
			switch (focusIndexRef.current) {
				case 1:
					setUserId((state) => (state.length ? state.slice(0, state.length - 1) : ''));
					break;
				case 2:
					setUserPw((state) => (state.length ? state.slice(0, state.length - 1) : ''));
					break;
			}
		} else if (e.key === 'Tab') {
			e.preventDefault();
			setFocusIndex((state) => (e.shiftKey ? TabIndex.prev(state) : TabIndex.next(state)));
		} else if (e.key.match(/^[a-zA-Z0-9]{1,1}$/) ? true : false) {
			switch (focusIndexRef.current) {
				case TabIndex.input1:
					if (userIdRef.current.length >= 12) {
						setPhase(Phase.error);
						setTimeout(() => {
							setPhase(Phase.initial);
						}, 150);
						return enqueueSnackbar('아이디는 12자를 초과할 수 없습니다', { variant: 'warning' });
					}
					setUserId((state) => (state.length >= 12 ? state : (state += e.key)));
					break;
				case TabIndex.input2:
					if (userPwRef.current.length >= 16) {
						setPhase(Phase.error);
						setTimeout(() => {
							setPhase(Phase.initial);
						}, 150);
						return enqueueSnackbar('패스워드는 16자를 초과할 수 없습니다', { variant: 'warning' });
					}
					setUserPw((state) => (state.length >= 16 ? state : (state += e.key)));
					break;
			}
		}
	}

	useEffect(() => {
		userIdRef.current = userId;
	}, [userId]);
	useEffect(() => {
		userPwRef.current = userPw;
	}, [userPw]);
	useEffect(() => {
		focusIndexRef.current = focusIndex;
	}, [focusIndex]);
	useEffect(() => {
		phaseRef.current = phase;
		if (phase === Phase.warp2Complete) {
			setUserId('');
			setUserPw('');
		}
	}, [phase]);
	useEffect(() => {
		window.addEventListener('keydown', handleType, false);
		return () => {
			window.removeEventListener('keydown', handleType, false);
		};
	}, []);

	return (
		<>
			<mesh
				geometry={nodes.card.geometry}
				material={
					new Three.MeshPhysicalMaterial({
						color: 'white',
						roughness: 0.3,
						reflectivity: 1,
						metalness: 0,
					})
				}
			/>
			<InputField
				input={nodes.input}
				underscore={nodes.underscore}
				focusIndex={focusIndex}
				setFocusIndex={setFocusIndex}
				phase={phase}
			/>
			<Button
				phase={phase}
				button={nodes.button}
				buttonDisabled={buttonDisabled}
				focusIndex={focusIndex}
				handleSubmit={handleSubmit}
			/>
			<StaticText textConfig={textConfig} />
			<Text
				config={textConfigD2}
				// position={[-0.6, 0.265, 0.3]}
				color="#333"
				children={userId}
				pointer={focusIndex === TabIndex.input1}
				phase={phase}
			/>
			<Text
				config={textConfigD2}
				// position={[-0.6, -0.2, 0.3]}
				color="#333"
				children={userPw}
				hideValue={true}
				pointer={focusIndex === TabIndex.input2}
				phase={phase}
			/>
		</>
	);
}
