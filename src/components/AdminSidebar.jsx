import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from '../assets/avatar.webp';
import LogoWhite from '../assets/logo-white.svg';

const sidebarLinks = [
	{
		id: 1,
		title: 'Quizzes',
		route: '/admin/dashboard',
	},
	{
		id: 2,
		title: 'Settings',
		route: '/admin/dashboard/settings',
	},
	{
		id: 3,
		title: 'Manage Users',
		route: '/admin/dashboard/manage-users',
	},
	{
		id: 4,
		title: 'Manage Roles',
		route: '/admin/dashboard/manage-roles',
	},
];
const AdminSidebar = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		navigate('/logout');
	};

	return (
		<aside className="w-64 bg-primary p-6 flex flex-col">
			<div className="mb-10">
				<img src={LogoWhite} className="h-7" alt="" />
			</div>
			<nav className="flex-grow">
				<ul className="space-y-2">
					{sidebarLinks.map((link) => (
						<li key={link.id}>
							<NavLink
								to={link.route}
								end={link.route === '/admin/dashboard'}
								className={({ isActive }) =>
									`block py-2 px-4 rounded-lg ${
										isActive
											? 'bg-buzzr-purple bg-white text-primary font-bold'
											: 'text-gray-100 hover:bg-gray-100 hover:text-primary'
									}`
								}
							>
								{link.title}
							</NavLink>
						</li>
					))}
					<li>
						<button
							className="w-full block text-start py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
							onClick={handleLogout}
						>
							Logout
						</button>
					</li>
				</ul>
			</nav>
			<div className="mt-auto flex items-center">
				<img
					src={Avatar}
					alt="Mr Hasan"
					className="w-10 h-10 rounded-full mr-3 object-cover"
				/>
				<span className="text-white font-semibold">Saad Hasan</span>
			</div>
		</aside>
	);
};

export default AdminSidebar;
