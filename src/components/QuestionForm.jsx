import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAxios } from '../hooks';

const QuestionForm = ({
	currentQuestionIndex,
	setCurrentQuestionIndex,
	question,
	totalQuestions,
	userAnswers,
	onAnswer,
}) => {
	const { api } = useAxios();
	const { quizSetId } = useParams();
	const navigate = useNavigate();
	const handleNext = () => {
		if (currentQuestionIndex < totalQuestions - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		}
	};

	const handlePrev = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex((prev) => prev - 1);
		}
	};

	const handleSubmit = async () => {
		console.log('Quiz submitted!', userAnswers);
		try {
			const response = await api.post(`/api/quizzes/${quizSetId}/attempt`, {
				answers: userAnswers,
			});

			if (response.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Quiz submitted successfully',
					confirmButtonText: 'Ok',
				}).then(() => navigate(`/result/${quizSetId}`));
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleOptionChange = (answer) => {
		onAnswer(question.id, answer);
	};

	const hasAnswered = userAnswers[question?.id] !== undefined;

	if (!question) {
		return (
			<div className="text-center text-gray-500">No question available</div>
		);
	}

	return (
		<div className="lg:col-span-2 bg-white">
			<div className="bg-white p-6 rounded-md">
				<h3 className="text-2xl font-semibold mb-4">
					{`${currentQuestionIndex + 1}. ${question.question}`}
				</h3>
				<div className="grid grid-cols-2 gap-4 mb-6">
					{question?.options?.map((option, index) => (
						<label
							key={index}
							className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg"
						>
							<input
								type="radio"
								name={question.id}
								value={option}
								onChange={() => handleOptionChange(option)}
								checked={userAnswers[question.id] === option}
								className="form-radio text-buzzr-purple"
							/>
							<span>{option}</span>
						</label>
					))}
				</div>
				<div className="flex justify-between">
					<button
						onClick={handlePrev}
						className={`py-2 px-4 rounded-md bg-primary text-white font-semibold ${
							currentQuestionIndex === 0
								? 'opacity-50 cursor-not-allowed'
								: 'hover:bg-indigo-800 focus:ring focus:ring-primary'
						}`}
						disabled={currentQuestionIndex === 0}
					>
						Prev
					</button>
					<button
						onClick={
							currentQuestionIndex === totalQuestions - 1
								? handleSubmit
								: handleNext
						}
						className={`py-2 px-4 rounded-md bg-primary text-white font-semibold ${
							!hasAnswered
								? 'opacity-50 cursor-not-allowed'
								: 'hover:bg-indigo-800 focus:ring focus:ring-primary'
						}`}
						disabled={!hasAnswered}
					>
						{currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionForm;
