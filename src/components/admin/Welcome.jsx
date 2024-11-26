import { useAuth } from '../../hooks';

const Welcome = () => {
	const { auth } = useAuth();
	const userName = auth?.user?.full_name;
	return (
		<header className="mb-8">
			<h2 className="text-2xl font-semibold">Hey There, {userName} 👋!</h2>
			<h1 className="text-4xl font-bold">Welcome Back To Your Quiz Hub!</h1>
		</header>
	);
};

export default Welcome;
