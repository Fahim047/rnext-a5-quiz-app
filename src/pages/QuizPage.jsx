import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../assets/avatar.webp';
import QuestionForm from '../components/QuestionForm';
import { useAxios } from '../hooks';
const QuizPage = () => {
	const [quizSet, setQuizSet] = useState({});
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const { quizSetId } = useParams();
	const { api } = useAxios();
	useEffect(() => {
		const fetchQuizSet = async () => {
			setLoading(true);
			try {
				const response = await api.get(`/api/quizzes/${quizSetId}`);
				if (response.status === 200) {
					console.log(response.data.data);
					setQuizSet(response.data.data);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchQuizSet();
	}, [api, quizSetId]);
	if (loading) {
		return (
			<div className="h-[300px] text-3xl flex items-center justify-center">
				Loading...
			</div>
		);
	}
	return (
		<main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
				{/* <!-- Left Column --> */}
				<div className="lg:col-span-1 bg-white rounded-md p-6 h-full flex flex-col">
					<div>
						<h2 className="text-4xl font-bold mb-4">{quizSet?.title}</h2>
						<p className="text-gray-600 mb-4">{quizSet?.description}</p>

						<div className="flex flex-col">
							<div className="w-fit bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
								Total number of questions : {quizSet?.stats?.total_questions}
							</div>

							<div className="w-fit bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
								Participation : 1
							</div>

							<div className="w-fit bg-gray-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
								Remaining : 9
							</div>
						</div>
					</div>

					<div className="mt-auto flex items-center">
						<img
							src={Avatar}
							alt="Mr Hasan"
							className="w-10 h-10 rounded-full mr-3 object-cover"
						/>
						<span className="text-black font-semibold">Saad Hasan</span>
					</div>
				</div>
				{/* <!-- Right Column --> */}

				<QuestionForm
					question={
						quizSet?.questions ? quizSet.questions[currentQuestionIndex] : ''
					}
					currentQuestionIndex={currentQuestionIndex}
					setCurrentQuestionIndex={setCurrentQuestionIndex}
					totalQuestions={quizSet?.stats?.total_questions}
				/>
			</div>
		</main>
	);
};

export default QuizPage;
