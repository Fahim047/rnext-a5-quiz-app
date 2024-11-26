import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Logo from '../assets/logo.svg';
import { useAuth } from '../hooks';
import { Toast } from '../sweetalert/Toast';

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
				Toast.fire({
					icon: 'success',
					title: 'Logged out successfully',
				});
			}
		});
	};
	return (
		<header className="backdrop-blur-md bg-white drop-shadow-sm py-2 sticky top-0 z-50">
			<div className="container py-3 mx-auto flex justify-between items-center">
				<Link to="/">
					<img src={Logo} className="h-7" alt="Quizzes" />
				</Link>
				<div>
					{auth?.user ? (
						<button
							onClick={handleLogoutClick}
							className="px-4 py-2 rounded border border-primary hover:bg-primary hover:text-white transition-colors"
							style={{ fontFamily: 'Jaro' }}
						>
							Logout
						</button>
					) : (
						<Link
							to="/login"
							className="px-4 py-2 rounded bg-primary border border-transparent text-white hover:bg-transparent hover:text-primary hover:border-primary transition-colors"
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
