import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const Logout = () => {
	const { setAuth } = useAuth();
	setAuth(null);
	return <Navigate to="/" />;
};

export default Logout;
