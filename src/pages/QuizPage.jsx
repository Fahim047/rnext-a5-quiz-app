import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';
import QuizStats from '../components/QuizStats';
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
				<QuizStats quizSet={quizSet ? quizSet : ''} />
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
