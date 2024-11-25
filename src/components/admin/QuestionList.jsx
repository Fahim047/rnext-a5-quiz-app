import QuestionCard from '../QuestionCard';

const QuestionList = ({ quizSet, setQuizSet, setEditingQuestion }) => {
	return (
		<div className="px-4">
			{quizSet?.Questions?.map((question, index) => (
				<QuestionCard
					key={question.id}
					index={index}
					question={question}
					setQuizSet={setQuizSet}
					setEditingQuestion={setEditingQuestion}
				/>
			))}
		</div>
	);
};

export default QuestionList;
