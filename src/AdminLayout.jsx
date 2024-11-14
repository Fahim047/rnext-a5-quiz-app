import { Navigate, Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import { useAuth } from './hooks';
const AdminLayout = () => {
	const { auth } = useAuth();
	console.log(auth);
	return (
		<>
			{auth?.user?.role === 'admin' ? (
				<div className="bg-gray-100 min-h-screen flex">
					<AdminSidebar />
					<Outlet />
				</div>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
};

export default AdminLayout;
