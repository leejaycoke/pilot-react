import axios from 'axios';
import UserInfo from './UserInfo';
import Response from './Response';

export const login = (userInfo: UserInfo) => {
	return axios
		.post(
			'http://localhost:5000/auth/login',
			JSON.stringify({ account: userInfo.account, password: userInfo.password }),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then(({ data }) => new Response('fulfilled', undefined, undefined, data.accessToken))
		.catch(({ response }) => {
			switch (response?.data?.code) {
				case 400:
					if (response.data?.validate?.account)
						response.data.validate.account.map((message: string) => console.log(message));
					if (response.data?.validate?.password)
						response.data.validate.password.map((message: string) => console.log(message));
					return new Response('rejected', response.data.message);
			}
			return new Response('rejected', '서버와 연결할 수 없습니다');
		});
};

export const getUserInfo = (token: string | undefined) => {
	return axios
		.get('http://localhost:5000//v1/users/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(
			({ data }) =>
				new Response(
					'fulfilled',
					undefined,
					new UserInfo(data.account, undefined, data.id, data.level, data.name)
				)
		)
		.catch(({ response }) => new Response('rejected', response?.data?.message || '서버와 연결할 수 없습니다'));
};
