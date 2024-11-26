import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAxios } from '../../hooks';
import { Toast } from '../../sweetalert/Toast';
import Cube from '../icons/Cube';
import Ellipsis from '../icons/Ellipsis';

const QuizSetCard = ({ quizSet, setQuizSets }) => {
	const { api } = useAxios();
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);
	const handleDeleteQuizSet = () => {
		const deleteQuizSet = async () => {
			try {
				const response = await api.delete(`/api/admin/quizzes/${quizSet.id}`);
				if (response.status === 200) {
					Toast.fire({
						icon: 'success',
						text: 'QuizSet deleted successfully',
					});
					setQuizSets((prevQuizSets) =>
						prevQuizSets.filter((qs) => qs.id !== quizSet.id)
					);
				}
			} catch (error) {
				console.error('Error deleting quiz set:', error);
				Toast.fire({
					icon: 'error',
					text: 'Failed to delete quiz set. Please try again.',
				});
			}
		};

		Swal.fire({
			title: 'Are you sure!',
			text: 'Do you want to continue',
			icon: 'warning',
			confirmButtonText: 'Confirm',
			showCancelButton: true,
			cancelButtonText: 'Cancel',
		}).then(({ isConfirmed }) => {
			if (isConfirmed) {
				deleteQuizSet();
			}
		});
	};

	return (
		<div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
			{/* Top Section */}
			<div className="flex justify-between items-center mb-4">
				<Cube className="text-buzzr-purple" />
				<div className="relative">
					<button
						onClick={toggleMenu}
						className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
					>
						<Ellipsis className="text-gray-600" />
					</button>
					{showMenu && (
						<div
							role="menu"
							aria-label="Quiz set menu"
							className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
						>
							<button
								className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
								onClick={() => navigate(`./quiz-set/${quizSet.id}`)}
							>
								Edit
							</button>
							<button
								className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
								onClick={handleDeleteQuizSet}
							>
								Delete
							</button>
							<button
								className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								onClick={toggleMenu}
							>
								Cancel
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Card Content */}
			<div
				className="cursor-pointer"
				onClick={() => navigate(`./quiz-set-entry-page/${quizSet.id}`)}
			>
				<h3 className="font-semibold text-lg mb-2 text-gray-800 hover:text-buzzr-purple">
					{quizSet.title}
				</h3>
				<p className="text-sm text-gray-600">{quizSet.description}</p>
			</div>
		</div>
	);
};

export default QuizSetCard;
