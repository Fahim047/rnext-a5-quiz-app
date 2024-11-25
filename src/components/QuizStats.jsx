import Avatar from '../assets/avatar.webp';
import QuizStatBadge from './QuizStatBadge';

const QuizStats = ({ quizSet, userAnswers }) => {
	if (!quizSet) return null;

	const { title = 'Untitled Quiz', description = 'N/A', stats = {} } = quizSet;
	const { total_questions = 0 } = stats;

	const participation = Object.keys(userAnswers).length;
	const remaining = total_questions - participation;

	return (
		<div className="lg:col-span-1 bg-white rounded-md p-6 h-full flex flex-col">
			<div>
				<h2 className="text-4xl font-bold mb-4">{title}</h2>
				<p className="text-gray-600 mb-4">{description}</p>

				<div className="flex flex-col">
					<QuizStatBadge
						bgColor="bg-green-100"
						textColor="text-green-800"
						label={`Total number of questions: ${total_questions}`}
					/>
					<QuizStatBadge
						bgColor="bg-blue-100"
						textColor="text-blue-800"
						label={`Participation: ${participation}`}
					/>
					<QuizStatBadge
						bgColor="bg-yellow-100"
						textColor="text-black/80"
						label={`Remaining: ${remaining}`}
					/>
				</div>
			</div>

			<div className="mt-auto flex items-center">
				<img
					src={Avatar}
					alt="Quiz Creator"
					className="w-10 h-10 rounded-full mr-3 object-cover"
				/>
				<span className="text-black font-semibold">Saad Hasan</span>
			</div>
		</div>
	);
};

export default QuizStats;
