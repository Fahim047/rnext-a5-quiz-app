import { getOptionClass, getUserChoiceIndicator } from '../../utils';

const AnswerCard = ({ question, questionNumber, submittedAnswer }) => {
	const isCorrect = submittedAnswer?.answer === question.correctAnswer;

	return (
		<div className="rounded-lg overflow-hidden shadow-sm mb-4">
			{/* Question */}
			<div className="bg-white p-6">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-lg font-semibold">
						{`${questionNumber}. ${question.question}`}
					</h3>
				</div>

				{/* Options */}
				<div className="space-y-2">
					{question.options.map((option, i) => (
						<div
							key={i}
							className={`p-4 rounded-md border flex justify-between items-center ${getOptionClass(
								option,
								question.correctAnswer,
								submittedAnswer?.answer
							)}`}
						>
							<span>{option}</span>
							{getUserChoiceIndicator(
								option,
								question.correctAnswer,
								submittedAnswer?.answer
							) && (
								<span
									className={`text-xl font-bold ${
										option === question.correctAnswer
											? 'text-green-800'
											: 'text-red-800'
									}`}
								>
									{getUserChoiceIndicator(
										option,
										question.correctAnswer,
										submittedAnswer?.answer
									)}
								</span>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Verdict */}
			<div
				className={`px-6 py-3 text-white text-lg font-medium ${
					isCorrect ? 'bg-green-500' : 'bg-red-500'
				}`}
			>
				{isCorrect
					? 'Correct! Great job.'
					: `Wrong. The correct answer is: ${question.correctAnswer}`}
			</div>
		</div>
	);
};

export default AnswerCard;
