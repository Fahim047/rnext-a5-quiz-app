import { useEffect, useState } from 'react';
import Greetings from '../components/Greetings';
import QuizSetCard from '../components/QuizSetCard';
import HomePageSkeleton from '../components/skeletons/HomePageSkeleton';
import { useAxios } from '../hooks';
const Home = () => {
	const { api } = useAxios();
	const [quizSets, setQuizSets] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchQuizSets = async () => {
			setLoading(true);
			try {
				const response = await api.get('/api/quizzes');
				if (response.status === 200) {
					setQuizSets(response.data.data);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchQuizSets();
	}, [api]);
	console.log(quizSets);
	if (loading) {
		return <HomePageSkeleton />;
	}
	if (quizSets.length === 0) {
		return (
			<div className="min-h-[400px] flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold">No Quizzes found!</h1>
				<p>Please make sure server is running or try again later!</p>
			</div>
		);
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
