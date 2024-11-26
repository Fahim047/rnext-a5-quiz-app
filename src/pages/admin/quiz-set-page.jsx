import { Link } from 'react-router-dom';
import QuizSetForm from '../../components/Forms/QuizSetForm';
import ArrowLeft from '../../components/icons/ArrowLeft';

const QuizSetPage = () => {
	return (
		<main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div>
					<Link
						to="/admin"
						className="inline-flex items-center text-sm text-gray-600 mb-6 hover:text-buzzr-purple"
					>
						<ArrowLeft />
						Back to home
					</Link>
					<h2 className="text-3xl font-bold mb-6">
						Give your quiz title and description
					</h2>
					<QuizSetForm />
				</div>
			</div>
		</main>
	);
};

export default QuizSetPage;
