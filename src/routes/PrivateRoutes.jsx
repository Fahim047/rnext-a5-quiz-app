import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const PrivateRoutes = ({ children }) => {
	const { auth } = useAuth();
	if (auth?.accessToken) {
		return children;
	}
	return <Navigate to="/login" />;
};

export default PrivateRoutes;
