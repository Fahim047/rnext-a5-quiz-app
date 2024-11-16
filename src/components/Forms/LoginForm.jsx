import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Field from '../shared/Field';

const LoginForm = () => {
	const { setAuth } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();
	const navigate = useNavigate();
	const submitForm = async (formData) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
				formData
			);
			if (response.status === 200) {
				const { user, tokens } = response.data.data;
				if (tokens) {
					const { accessToken, refreshToken } = tokens;
					// console.log(`Login successful, authInfo:`, {
					// 	user,
					// 	accessToken,
					// 	refreshToken,
					// });
					setAuth({ user, accessToken, refreshToken });
					if (user?.role === 'admin' && formData.admin) {
						navigate('/admin');
					} else {
						navigate('/');
					}
				} else {
					throw new Error('Something went wrong!');
				}
			}
		} catch (error) {
			console.log(error);
			setError('root.random', {
				type: 'random',
				message: error.message,
			});
		}
	};
	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<Field label="Enter your email address" error={errors.email}>
				<input
					{...register('email', {
						required: 'Email is required',
					})}
					type="email"
					id="email"
					className={`w-full px-4 py-3 rounded-lg border border-gray-300 ${
						errors.email ? 'border-red-500' : ''
					}`}
					placeholder="Enter your email address"
				/>
			</Field>
			<Field label="Enter your Password" error={errors.password}>
				<input
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 8,
							message: 'Password must be at least 8 characters',
						},
					})}
					type="password"
					id="password"
					className={`w-full px-4 py-3 rounded-lg border border-gray-300 ${
						errors.password ? 'border-red-500' : ''
					}`}
					placeholder="Password"
				/>
			</Field>
			<div className="mb-6 flex gap-2 items-center">
				<input
					{...register('admin')}
					type="checkbox"
					id="admin"
					className="px-4 py-3 rounded-lg border border-gray-300"
				/>
				<label htmlFor="admin" className="block ">
					Login as Admin
				</label>
			</div>
			<p className="text-red-500 text-lg mb-4">
				{errors?.root?.random?.message}
			</p>
			<button
				type="submit"
				className="w-full bg-primary text-white py-3 rounded-lg mb-4"
			>
				Sign in
			</button>
		</form>
	);
};

export default LoginForm;
