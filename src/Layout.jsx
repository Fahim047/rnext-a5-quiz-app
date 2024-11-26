import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className="bg-[#F5F3FF] min-h-screen">
				<div className="container mx-auto py-3">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
