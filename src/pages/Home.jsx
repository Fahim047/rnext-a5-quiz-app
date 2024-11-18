import { useEffect, useState } from 'react';
import Greetings from '../components/Greetings';
import QuizSetCard from '../components/QuizSetCard';
import { useAxios } from '../hooks';
const Home = () => {
	const { api } = useAxios();
	const [quizSets, setQuizSets] = useState([]);

	useEffect(() => {
		const fetchQuizSets = async () => {
			try {
				const response = await api.get('/api/quizzes');
				if (response.status === 200) {
					setQuizSets(response.data.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchQuizSets();
	}, []);
	console.log(quizSets);
	if (quizSets.length === 0) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Greetings />
			<main className="bg-white p-6 rounded-md h-full">
				<section>
					<h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>
					{/* <!-- Cards --> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{quizSets.map((quizSet) => (
							<QuizSetCard key={quizSet.id} quizSet={quizSet} />
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
