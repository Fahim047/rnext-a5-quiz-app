import QuestionCard from '../QuestionCard';

const QuestionList = ({ questions }) => {
	return (
		<div className="px-4">
			{questions?.length > 0 &&
				questions.map((question, index) => (
					<QuestionCard key={question.id} index={index} quiz={question} />
				))}
		</div>
	);
};

export default QuestionList;
