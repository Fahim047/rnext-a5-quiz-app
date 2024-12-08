import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Toast } from '../../sweetalert/Toast';
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
				if (user?.role === 'user' && formData.admin) {
					throw new Error('You are not an admin');
				}
				if (tokens) {
					const { accessToken, refreshToken } = tokens;
					setAuth({ user, accessToken, refreshToken });
					if (user?.role === 'admin' && formData.admin) {
						navigate('/admin');
					} else {
						navigate('/');
					}
					Toast.fire({
						icon: 'success',
						title: `Welcome, ${user.full_name}`,
					});
				} else {
					throw new Error('Something went wrong!');
				}
			}
		} catch (error) {
			console.log(error);
			setError('root.random', {
				type: 'random',
				message: error?.response?.data?.message,
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
			<div className="px-2 -mt-2 mb-2 text-end">
				<Link to="/login" className="text-red-500 underline underline-offset-2">
					Forgot Password?
				</Link>
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
