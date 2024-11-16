import Swal from 'sweetalert2';
import { useAxios } from '../hooks';
const QuestionCard = ({ quiz, index }) => {
	console.log(quiz);
	const { api } = useAxios();
	const handleDelete = () => {
		const deleteQuestion = async () => {
			const response = await api.delete(`api/admin/questions/${quiz.id}`);
			if (response.status === 200) {
				Swal.fire('Deleted!', 'The quiz has been deleted.', 'success');
			}
		};
		Swal.fire({
			title: 'Are you sure!',
			text: 'Do you want to continue',
			icon: 'warning',
			confirmButtonText: 'confirm',
			showCancelButton: true,
		}).then(({ isConfirmed }) => {
			if (isConfirmed) {
				deleteQuestion();
			}
		});
	};
	return (
		<div className="rounded-lg overflow-hidden shadow-sm mb-4">
			<div className="bg-white p-6 !pb-2">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-lg font-semibold">{`${index + 1}. ${
						quiz.question
					}`}</h3>
				</div>
				<div className="space-y-2">
					{quiz.options.map((option, index) => {
						if (quiz.correctAnswer === option) {
							return (
								<label key={index} className="flex items-center space-x-3">
									<input
										type="radio"
										name={`${quiz.id}-correctAnswer`}
										className="form-radio text-buzzr-purple"
										checked
										value={option}
									/>
									<span>{option}</span>
								</label>
							);
						} else {
							return (
								<label key={index} className="flex items-center space-x-3">
									<input
										type="radio"
										name={`${quiz.id}-correctAnswer`}
										className="form-radio text-buzzr-purple"
										value={option}
										disabled
									/>
									<span>{option}</span>
								</label>
							);
						}
					})}
				</div>
			</div>
			<div className="flex space-x-4 bg-primary/10 px-6 py-2">
				<button
					className="text-red-600 hover:text-red-800 font-medium"
					onClick={handleDelete}
				>
					Delete
				</button>
				<button className="text-primary hover:text-primary/80 font-medium">
					Edit Question
				</button>
			</div>
		</div>
	);
};

export default QuestionCard;
