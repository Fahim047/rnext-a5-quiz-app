import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Field from '../shared/Field';

const RegistrationForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		getValues,
	} = useForm();

	const submitForm = async (formData) => {
		// console.log(formData);
		const formattedData = {
			full_name: formData.name,
			email: formData.email,
			password: formData.password,
			role: formData.role ? 'admin' : 'user',
		};
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
				formattedData
			);
			if (response.status === 201) {
				Swal.fire('success', 'Registration Successful!', 'success').then(() =>
					navigate('/login')
				);
			} else {
				throw new Error('Registration failed! Please try again.');
			}
		} catch (error) {
			console.error(error);
			setError('root.serverError', {
				type: 'serverError',
				message: error?.response?.data?.message,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div>
				{/* Name Field */}
				<Field label="Name" error={errors.name}>
					<input
						{...register('name', {
							required: 'Name is required',
						})}
						type="text"
						id="name"
						className={`w-full px-4 py-3 rounded-lg border ${
							errors.name ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Enter your full name"
					/>
				</Field>

				{/* Email Field */}
				<Field label="Email" error={errors.email}>
					<input
						{...register('email', {
							required: 'Email is required',
						})}
						type="email"
						id="email"
						className={`w-full px-4 py-3 rounded-lg border ${
							errors.email ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Enter your email address"
					/>
				</Field>
			</div>

			{/* Password Fields */}
			<div className="flex gap-4">
				<Field label="Password" error={errors.password}>
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
						className={`w-full px-4 py-3 rounded-lg border ${
							errors.password ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Enter your password"
					/>
				</Field>

				<Field label="Confirm Password" error={errors.confirmPassword}>
					<input
						{...register('confirmPassword', {
							required: 'Confirm password is required',
							validate: (value) =>
								value === getValues('password') || 'Passwords do not match',
						})}
						type="password"
						id="confirmPassword"
						className={`w-full px-4 py-3 rounded-lg border ${
							errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder="Confirm your password"
					/>
				</Field>
			</div>

			{/* Admin Checkbox */}
			<div className="mb-6 flex gap-2 items-center">
				<input
					{...register('role')}
					type="checkbox"
					id="role"
					className="rounded-lg border border-gray-300"
				/>
				<label htmlFor="role" className="block">
					Register as Admin
				</label>
			</div>
			{/* Server Error */}
			{errors.root?.serverError && (
				<p className="text-red-500 mt-2">{errors.root.serverError.message}</p>
			)}
			{/* Submit Button */}
			<button
				type="submit"
				className="w-full bg-primary text-white py-3 rounded-lg mb-2"
			>
				Create Account
			</button>
		</form>
	);
};

export default RegistrationForm;
