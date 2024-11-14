import axios from 'axios';
import { useEffect } from 'react';
import { api } from '../api';
import { useAuth } from './index';
const useAxios = () => {
	const { auth, setAuth } = useAuth();
	useEffect(() => {
		const requestInterceptor = api.interceptors.request.use(
			(config) => {
				const authToken = auth?.authToken;
				if (authToken) {
					config.headers.Authorization = `Bearer ${authToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseInterceptor = api.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;
				if (error.response.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;
					console.log(auth);
					const refreshToken = auth?.refreshToken;
					console.log(refreshToken);
					const response = await axios.post(
						`${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh-token`,
						{
							refreshToken,
						}
					);
					console.log(response.data);
					const { accessToken } = response.data.data;
					console.log('New token:', accessToken);
					setAuth({ ...auth, authToken: accessToken });
					originalRequest.headers.Authorization = `Bearer ${accessToken}`;
					return axios(originalRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			api.interceptors.request.eject(requestInterceptor);
			api.interceptors.response.eject(responseInterceptor);
		};
	}, [auth, setAuth]);

	return { api };
};
export default useAxios;
