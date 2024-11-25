import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
];
const Navbar = () => {
	const { auth } = useAuth();
	const navigate = useNavigate();
	const handleLogoutClick = () => {
		Swal.fire({
			title: 'Are you sure!?',
			text: 'Do you want to continue',
			icon: 'warning',
			confirmButtonText: 'Confirm',
			showCancelButton: true,
			cancelButtonText: 'Cancel',
		}).then((result) => {
			if (result.isConfirmed) {
				navigate('/logout');
			}
		});
	};
	return (
		<header className="backdrop-blur-md py-3 sticky top-0 z-50 mb-12">
			<div className="flex justify-between items-center">
				<Link to="/">
					<img src={Logo} className="h-7" alt="Quizzes" />
				</Link>
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
						<button
							onClick={handleLogoutClick}
							className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
							style={{ fontFamily: 'Jaro' }}
						>
							Logout
						</button>
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
