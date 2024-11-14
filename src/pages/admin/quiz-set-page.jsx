import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../components/icons/ArrowLeft';
import { useAxios } from '../../hooks';

// response will be like this
// {
// 	"status": "success",
// 	"data": {
// 			"id": "98a0bbbd-27a0-457b-8699-4c348a9256f4",
// 			"status": "draft",
// 			"title": "React.js Fundamentals",
// 			"description": "Test your knowledge of JavaScript basics with quizzes that cover essential concepts, syntax, and foundational programming skills",
// 			"thumbnail": "http://localhost:5000/images/7.jpg",
// 			"userId": "00176b41-c9af-48b4-b792-ad3128f02ffa",
// 			"updatedAt": "2024-11-14T06:59:30.645Z",
// 			"createdAt": "2024-11-14T06:59:30.645Z"
// 	}
// }
const QuizSetPage = () => {
	const { api } = useAxios();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();
	const handleCreateQuizSet = async (formData) => {
		const formattedData = {
			title: formData['quiz-title'],
			description: formData['quiz-description'],
		};
		console.log(formattedData);
		const response = await api.post('/api/admin/quizzes', formattedData);
		if (response.status === 201) {
			const data = response.data;
			console.log(data);
			// navigate('/admin/quiz-set-entry-page/');
		}
	};
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

					<form onSubmit={handleSubmit(handleCreateQuizSet)}>
						<div className="mb-4">
							<label
								htmlFor="quiz-title"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Quiz title
							</label>
							<input
								{...register('quiz-title', { required: 'Title is required' })}
								type="text"
								id="quiz-title"
								name="quiz-title"
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
								placeholder="Quiz"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="quiz-description"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Description (Optional)
							</label>
							<textarea
								{...register('quiz-description')}
								id="quiz-description"
								name="quiz-description"
								rows="4"
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
								placeholder="Description"
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						>
							Next
						</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default QuizSetPage;
