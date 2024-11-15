import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const LoginForm = () => {
	const { auth, setAuth } = useAuth();
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
					const accessToken = tokens.accessToken;
					const refreshToken = tokens.refreshToken;
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
				}
			}
		} catch (error) {
			console.log(error);
			setError('root.random', {
				type: 'random',
				message: 'User not found!',
			});
		}
	};
	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="mb-4">
				<label htmlFor="email" className="block mb-2">
					Enter your email or email address
				</label>
				<input
					{...register('email', {
						required: 'email or email is required',
					})}
					type="text"
					id="email"
					className="w-full px-4 py-3 rounded-lg border border-gray-300"
					placeholder="email or email address"
				/>
			</div>
			<div className="mb-6">
				<label htmlFor="password" className="block mb-2">
					Enter your Password
				</label>
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
					className="w-full px-4 py-3 rounded-lg border border-gray-300"
					placeholder="Password"
				/>
			</div>
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
			<p className="text-red-500 text-lg">{errors?.root?.random?.message}</p>
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
