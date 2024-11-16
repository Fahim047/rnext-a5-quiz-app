import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAxios } from '../../hooks';
import Field from '../shared/Field';
import OptionField from '../shared/OptionField';

const QuizForm = ({ quizSetId, setQuizSet }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { api } = useAxios();

	const submitForm = async (formData) => {
		// console.log(formData);
		const options = [
			formData.option1,
			formData.option2,
			formData.option3,
			formData.option4,
		];
		const correctAnswerIndex = parseInt(formData.correctAnswer, 10);
		const correctAnswer = options[correctAnswerIndex];
		const formattedData = {
			question: formData.questionTitle,
			options,
			correctAnswer,
		};
		try {
			const response = await api.post(
				`/api/admin/quizzes/${quizSetId}/questions`,
				formattedData
			);
			if (response.status === 201) {
				Swal.fire('Success', 'Question added successfully', 'success');
				setQuizSet((prevQuizSet) => ({
					...prevQuizSet,
					Questions: [...prevQuizSet.Questions, response.data.data],
				}));
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="space-y-4">
				<h2 className="text-xl font-bold text-foreground">Create Quiz</h2>
				{/* Question Title */}
				<Field
					label="Question Title"
					htmlFor="questionTitle"
					error={errors.questionTitle}
					className="block text-sm font-medium text-foreground mb-1"
				>
					<input
						{...register('questionTitle', {
							required: 'Question title is required',
						})}
						type="text"
						id="questionTitle"
						name="questionTitle"
						className="w-full mt-2 p-2 border border-input rounded-md bg-background text-foreground"
						placeholder="Enter question title"
					/>
				</Field>
				<p className="text-sm text-gray-600 mt-4">Add Options</p>
				<div id="optionsContainer" className="space-y-2 mt-4">
					{[1, 2, 3, 4].map((index) => (
						<OptionField
							key={index}
							id={`option${index}`}
							name={`option${index}`}
							label={`Option ${index}`}
							placeholder={`Option ${index}`}
							register={register}
							radioName="correctAnswer"
							radioValue={index - 1}
							radioRegister={register('correctAnswer', {
								required: 'Please select the correct answer',
							})}
						/>
					))}
					{errors.correctAnswer && (
						<p className="text-red-500 text-sm">
							{errors.correctAnswer.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button className="w-full bg-primary text-white text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors">
					Save Quiz
				</button>
			</div>
		</form>
	);
};

export default QuizForm;
