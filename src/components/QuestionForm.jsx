const QuestionForm = ({
	currentQuestionIndex,
	setCurrentQuestionIndex,
	question,
	totalQuestions,
}) => {
	if (!question) {
		console.log('if er vitor dhukse');
		return null;
	}
	return (
		<div className="lg:col-span-2 bg-white">
			<div className="bg-white p-6 !pb-2 rounded-md">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-2xl font-semibold">
						{`${currentQuestionIndex + 1}. ${question.question}`}
					</h3>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{/* <!-- Option 1 --> */}
					{question?.options?.map((option, index) => (
						<label
							key={index}
							className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg"
						>
							<input
								type="radio"
								name="answer"
								className="form-radio text-buzzr-purple"
							/>
							<span>{option}</span>
						</label>
					))}
				</div>
				<div className="flex justify-between gap-4">
					{currentQuestionIndex > 0 && (
						<button
							onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
							className="w-fit text-center mr-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
						>
							Prev
						</button>
					)}
					{currentQuestionIndex < totalQuestions - 1 && (
						<button
							onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
							className="w-fit text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
						>
							Next
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default QuestionForm;
