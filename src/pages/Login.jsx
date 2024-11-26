import { Link, useNavigate } from 'react-router-dom';
import SalyImage from '../assets/Saly-1.png';
import Logo from '../assets/logo.svg';
import LoginForm from '../components/Forms/LoginForm';
const Login = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-white text-gray-800 overflow-hidden">
			<div className="flex min-h-screen">
				{/* <!-- Left side --> */}
				<div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative">
					<div className="text-white">
						<img src={SalyImage} alt="Illustration" className="mx-auto" />

						<h2 className="text-3xl font-bold mb-4">Sign in Now</h2>
						<p className="text-xl mb-4">Boost Your Learning Capabilities</p>
						<p className="mb-8">
							Logging in unlocks your personal progress tracker, letting you
							evaluate your performance and see how you stack up against others.
							Whether you&apos;re preparing for exams, improving your knowledge,
							or simply having fun, there&apos;s no better way to sharpen your
							mind.
						</p>
					</div>
				</div>

				{/* <!-- Right side --> */}
				<div className="w-full lg:w-1/2 flex items-center justify-center p-12">
					<div className="w-full max-w-md">
						<h2 className="text-3xl font-bold mb-3 flex gap-2 items-center">
							<span>Welcome to</span>
							<img
								src={Logo}
								className="h-7 cursor-pointer"
								alt=""
								onClick={() => navigate('/')}
							/>
						</h2>
						<h1 className="text-5xl font-bold mb-8">Sign in</h1>
						<LoginForm />
						<div className="mt-4">
							<p className="text-center text-gray-500">
								Don&apos;t have an Account?{' '}
								<Link
									to="/signup"
									className="text-primary underline underline-offset-2"
								>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
