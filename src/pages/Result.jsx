import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useParams } from 'react-router-dom';
import AnswerCard from '../components/result/AnswerCard';
import useQuizSetData from '../hooks/useQuizSetData';
const Result = () => {
	const { quizSetId } = useParams();
	const { quizData, loading, error } = useQuizSetData(quizSetId);

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

	if (!quizData) {
		return null;
	}

	return (
		<div className="bg-background text-foreground min-h-screen">
			<div className="flex min-h-screen overflow-hidden">
				{/* <!-- Left side --> */}
				<div className="max-h-screen overflow-hidden hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center p-12 relative">
					<div>
						<div className="text-white">
							<div>
								<h2 className="text-4xl font-bold mb-2">{quizData.title}</h2>
								<p>{quizData.description}</p>
							</div>

							<div className="my-6 flex items-center  ">
								<div className="w-1/2">
									<div className="flex gap-6 my-6">
										<div>
											<p className="font-semibold text-2xl my-0">
												{quizData.totalQuestions}
											</p>
											<p className="text-gray-300">Questions</p>
										</div>

										<div>
											<p className="font-semibold text-2xl my-0">
												{quizData.correctCount}
											</p>
											<p className="text-gray-300">Correct</p>
										</div>

										<div>
											<p className="font-semibold text-2xl my-0">
												{quizData.wrongCount}
											</p>
											<p className="text-gray-300">Wrong</p>
										</div>
									</div>

									<Link
										to={`/leaderboard/${quizSetId}`}
										className=" bg-secondary py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium underline text-white"
									>
										View Leaderboard
									</Link>
								</div>

								<div className="w-1/2 bg-primary/80 rounded-md border border-white/20 flex items-center p-4">
									<div className="flex-1">
										<p className="text-2xl font-bold">
											{quizData.userScore}/{quizData.totalMarks}
										</p>
										<p>Your Mark</p>
									</div>
									<div>
										<CircularProgressbar
											value={quizData.userScorePercentage}
											text={`${quizData.userScorePercentage}%`}
											className="h-20"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Right side --> */}
				<div className="max-h-screen md:w-1/2 flex items-center justify-center h-full p-8">
					<div className="h-[calc(100vh-50px)] overflow-y-scroll ">
						<div className="px-4">
							{quizData.questions.map((question, index) => (
								<AnswerCard
									key={question.id}
									question={question}
									questionNumber={index + 1}
									submittedAnswer={quizData.userAttempt.submitted_answers.find(
										(answer) => answer.question_id === question.id
									)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
