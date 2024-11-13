import useAuth from './useAuth';

const useProfile = () => {
	const { auth } = useAuth();
	return auth?.user;
};
export default useProfile;
