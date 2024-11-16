import QuestionCard from '../QuestionCard';

const QuestionList = ({ quizSet, setQuizSet }) => {
	return (
		<div className="px-4">
			{quizSet?.Questions?.map((question, index) => (
				<QuestionCard
					key={question.id}
					index={index}
					question={question}
					setQuizSet={setQuizSet}
				/>
			))}
		</div>
	);
};

export default QuestionList;
