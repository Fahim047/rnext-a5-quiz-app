import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const Logout = () => {
	const { auth, setAuth } = useAuth();
	setAuth(null);
	console.log(auth);
	return <Navigate to="/login" />;
};

export default Logout;
