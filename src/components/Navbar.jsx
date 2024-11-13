import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { useAuth } from '../hooks';
const navLinks = [
	{
		id: 1,
		title: 'Home',
		route: '/',
	},
	{
		id: 2,
		title: 'Leaderboard',
		route: '/leaderboard',
	},
	{
		id: 3,
		title: 'Result',
		route: '/result',
	},
];
const Navbar = () => {
	const { auth } = useAuth();
	return (
		<header className="backdrop-blur-md py-3 sticky top-0 z-50 mb-12">
			<div className="flex justify-between items-center">
				<img src={Logo} className="h-7" alt="Quizzes" />
				<div className="flex gap-4">
					{navLinks.map((link) => (
						<NavLink
							to={link.route}
							key={link.id}
							className={({ isActive }) =>
								isActive
									? 'text-primary underline underline-offset-4 decoration-2'
									: ''
							}
							style={{ fontFamily: 'Jaro' }}
						>
							{link.title}
						</NavLink>
					))}
				</div>
				<div>
					{auth?.user ? (
						<Link
							to="/logout"
							className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
							style={{ fontFamily: 'Jaro' }}
						>
							Logout
						</Link>
					) : (
						<Link
							to="/login"
							className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
							style={{ fontFamily: 'Jaro' }}
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
