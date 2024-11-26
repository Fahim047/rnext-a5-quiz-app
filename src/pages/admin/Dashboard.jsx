import { useEffect, useState } from 'react';
import CreateQuizSetCard from '../../components/admin/CreateQuizSetCard';
import QuizSetCard from '../../components/admin/QuizSetCard';
import Welcome from '../../components/admin/Welcome';
import { useAxios } from '../../hooks';
const Dashboard = () => {
	const [quizSets, setQuizSets] = useState([]);
	const { api } = useAxios();
	useEffect(() => {
		const fetchQuizSets = async () => {
			try {
				const response = await api.get('/api/admin/quizzes');
				if (response.status === 200) {
					setQuizSets(response.data);
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchQuizSets();
	}, [api]);
	return (
		<main className="flex-grow p-10">
			<Welcome />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<CreateQuizSetCard />
				{quizSets?.map((quizSet) => (
					<QuizSetCard key={quizSet.id} quizSet={quizSet} />
				))}
			</div>
		</main>
	);
};

export default Dashboard;
