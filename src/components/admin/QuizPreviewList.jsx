import QuizCard from '../QuizCard';

const QuizPreviewList = ({ quizSet }) => {
	console.log(quizSet);
	return (
		<div className="px-4">
			{quizSet.questions.length > 0 &&
				quizSet.questions.map((quizQuestion, index) => (
					<QuizCard key={quizQuestion.id} index={index} quiz={quizQuestion} />
				))}
		</div>
	);
};

export default QuizPreviewList;
