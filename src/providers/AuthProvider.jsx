import AuthContext from '../contexts/AuthContext';
import { useLocalStorage } from '../hooks';

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useLocalStorage('auth', null);
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
