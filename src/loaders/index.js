// import { useAxios } from '../hooks';
export const getQuizSetEntryPageAction = async ({ params }) => {
	// const { api } = useAxios();
	const { quizSetId } = params;
	const response = await api.get(
		`${import.meta.env.VITE_API_BASE_URL}/api/admin/${quizSetId}`
	);
	console.log(response);
	const data = await response.data;
	console.log(data);
	return data;
};

export const getQuizSetById = async ({ params }) => {
	const { quizSetId } = params;
	const response = await api.get(`/quizzes/${quizSetId}`);
};
