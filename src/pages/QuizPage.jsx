import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';
import QuizStats from '../components/QuizStats';
import { useAxios } from '../hooks';

const QuizPage = () => {
	const [quizSet, setQuizSet] = useState(null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [userAnswers, setUserAnswers] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { quizSetId } = useParams();
	const { api } = useAxios();

	// Fetch quizSet data
	useEffect(() => {
		const fetchQuizSet = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await api.get(`/api/quizzes/${quizSetId}`);
				if (response.status === 200) {
					setQuizSet(response.data.data);
				} else {
					throw new Error('Failed to fetch quiz data');
				}
			} catch (err) {
				setError('Unable to load quiz. Please try again later.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		fetchQuizSet();
	}, [api, quizSetId]);

	const handleAnswer = (questionId, answer) => {
		setUserAnswers((prev) => ({
			...prev,
			[questionId]: answer,
		}));
	};

	if (loading) {
		return (
			<div className="h-[300px] text-3xl flex items-center justify-center">
				Loading...
			</div>
		);
	}

	if (error) {
		return (
			<div className="h-[300px] text-3xl flex items-center justify-center text-red-500">
				{error}
			</div>
		);
	}

	if (!quizSet) {
		return null;
	}

	const questions = quizSet.questions || [];
	const currentQuestion = questions[currentQuestionIndex];

	return (
		<main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
				<QuizStats quizSet={quizSet} userAnswers={userAnswers} />
				<QuestionForm
					question={currentQuestion}
					currentQuestionIndex={currentQuestionIndex}
					setCurrentQuestionIndex={setCurrentQuestionIndex}
					totalQuestions={quizSet?.stats?.total_questions || 0}
					userAnswers={userAnswers}
					onAnswer={handleAnswer}
				/>
			</div>
		</main>
	);
};

export default QuizPage;
