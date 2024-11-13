import { Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
const AdminLayout = () => {
	return (
		<div className="bg-gray-100 min-h-screen flex">
			<AdminSidebar />
			<Outlet />
		</div>
	);
};

export default AdminLayout;
