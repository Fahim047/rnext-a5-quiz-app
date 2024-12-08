import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionList from '../../components/admin/QuestionList';
import QuizForm from '../../components/admin/QuizForm';
import { useAxios } from '../../hooks';
import { Toast } from '../../sweetalert/Toast';

const QuizSetEntryPage = () => {
	const [quizSet, setQuizSet] = useState(null);
	const [editingQuestion, setEditingQuestion] = useState(null);
	const [loading, setLoading] = useState(true);
	const { quizSetId } = useParams();
	const { api } = useAxios();
	const handleStatusChange = async () => {
		const newStatus = quizSet?.status === 'draft' ? 'published' : 'draft';
		try {
			const response = await api.patch(`/api/admin/quizzes/${quizSetId}`, {
				status: newStatus,
			});
			if (response.status === 200) {
				setQuizSet((prevQuizSet) => ({ ...prevQuizSet, status: newStatus }));
				Toast.fire({
					icon: 'success',
					text: `Quiz status updated to ${newStatus}`,
				});
			}
		} catch (error) {
			console.log(error);
			Toast.fire({
				icon: 'error',
				text: 'Something went wrong',
			});
		}
	};
	useEffect(() => {
		const fetchQuizSets = async () => {
			// setLoading(true);
			try {
				const response = await api.get('/api/admin/quizzes');
				if (response.status === 200) {
					const requiredData = response.data.find(
						(item) => item.id === quizSetId
					);
					setQuizSet(requiredData);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchQuizSets();
	}, [api, quizSetId]);
	if (loading) return <div>Loading...</div>;
	if (!quizSet) return null;
	return (
		<main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
			<div>
				<nav
					className="text-sm mb-4 flex justify-between items-center"
					aria-label="Breadcrumb"
				>
					<ol className="list-none p-0 inline-flex">
						<li className="flex items-center">
							<a href="/" className="text-gray-600 hover:text-buzzr-purple">
								Home
							</a>
							<svg
								className="fill-current w-3 h-3 mx-3"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
							>
								<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
							</svg>
						</li>
						<li>
							<a
								href="/"
								className="text-gray-600 hover:text-buzzr-purple"
								aria-current="page"
							>
								Quizzes
							</a>
						</li>
					</ol>

					<button
						className={`w-fit text-base bg-primary text-white text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors ${
							quizSet?.Questions?.length === 0 ? 'cursor-not-allowed' : ''
						}`}
						disabled={quizSet?.Questions?.length === 0}
						onClick={handleStatusChange}
					>
						{quizSet?.status === 'draft' ? 'Publish' : 'Unpublish'}
					</button>
				</nav>
				<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12">
					<div>
						<h2 className="text-3xl font-bold mb-4">{quizSet?.title}</h2>
						<div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4">
							Total number of questions : {quizSet?.Questions?.length}
						</div>
						<p className="text-gray-600 mb-4">{quizSet?.description}</p>
						<p className="mb-4 text-gray-600 font-bold">
							Note: minimum 1 question is required to publish.
						</p>
						<QuizForm
							quizSetId={quizSetId}
							setQuizSet={setQuizSet}
							editingQuestion={editingQuestion}
							setEditingQuestion={setEditingQuestion}
						/>
					</div>
					<QuestionList
						quizSet={quizSet}
						setQuizSet={setQuizSet}
						setEditingQuestion={setEditingQuestion}
					/>
				</div>
			</div>
		</main>
	);
};

export default QuizSetEntryPage;
