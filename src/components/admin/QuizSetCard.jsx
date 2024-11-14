import { Link } from 'react-router-dom';
import Cube from '../icons/Cube';

const QuizSetCard = ({ quizSet }) => {
	console.log(quizSet);
	return (
		<Link to={`./quiz-set-entry-page/${quizSet.id}`}>
			<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 group">
				<div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
					<Cube />
				</div>
				<h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
					Backend vs. Frontend Quiz
				</h3>
				<p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
					Test knowledge of core JavaScript
				</p>
			</div>
		</Link>
	);
};

export default QuizSetCard;
