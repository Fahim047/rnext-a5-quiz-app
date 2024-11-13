import Avatar from '../assets/avatar.webp';
import { useAuth } from '../hooks';
const Greetings = () => {
	const { auth } = useAuth();

	return (
		<>
			{auth?.authToken && (
				<section className="text-center mb-12">
					<img
						src={Avatar}
						alt="Profile"
						className="w-32 h-32 rounded-full border-4 border-primary mx-auto mb-4 object-cover"
					/>
					<p className="text-xl text-gray-600">Welcome</p>
					<h2
						className="text-4xl font-bold text-gray-700"
						style={{ fontFamily: 'Jaro' }}
					>
						{auth?.user?.full_name}
					</h2>
				</section>
			)}
		</>
	);
};

export default Greetings;
