import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAxios } from '../../hooks';
import { Toast } from '../../sweetalert/Toast';
import Field from '../shared/Field';
import OptionField from '../shared/OptionField';

const QuizForm = ({
	quizSetId,
	setQuizSet,
	editingQuestion,
	setEditingQuestion,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { api } = useAxios();

	useEffect(() => {
		// Prefill the form if editingQuestion changes
		if (editingQuestion) {
			reset({
				questionTitle: editingQuestion.question,
				option1: editingQuestion.options[0],
				option2: editingQuestion.options[1],
				option3: editingQuestion.options[2],
				option4: editingQuestion.options[3],
				correctAnswer: editingQuestion.options
					.indexOf(editingQuestion.correctAnswer)
					.toString(),
			});
		} else {
			reset({
				questionTitle: '',
				option1: '',
				option2: '',
				option3: '',
				option4: '',
				correctAnswer: '',
			});
		}
	}, [editingQuestion, reset]);

	const submitForm = async (formData) => {
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
			if (editingQuestion) {
				// Update question if editing
				const response = await api.patch(
					`/api/admin/questions/${editingQuestion.id}`,
					formattedData
				);
				if (response.status === 200) {
					setQuizSet((prevQuizSet) => ({
						...prevQuizSet,
						Questions: prevQuizSet.Questions.map((q) =>
							q.id === editingQuestion.id ? response.data.data : q
						),
					}));
					setEditingQuestion(null);
					Toast.fire({
						icon: 'success',
						text: 'Question updated successfully',
					});
				}
			} else {
				// Create new question
				const response = await api.post(
					`/api/admin/quizzes/${quizSetId}/questions`,
					formattedData
				);
				if (response.status === 201) {
					setQuizSet((prevQuizSet) => ({
						...prevQuizSet,
						Questions: [...prevQuizSet.Questions, response.data.data],
					}));
					reset();
					Toast.fire({
						icon: 'success',
						text: 'Question added successfully',
					});
				}
			}
		} catch (error) {
			console.error(error);
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

				{/* Submit Button and Cancel Button*/}
				<div className="flex space-x-4">
					<button className="w-full bg-primary text-white text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors">
						{editingQuestion ? 'Update' : 'Create'}
					</button>
					{editingQuestion && (
						<button
							type="button"
							onClick={() => setEditingQuestion(null)}
							className="w-full bg-red-500 text-white text-primary-foreground p-2 rounded-md hover:bg-red-600 transition-colors"
						>
							Cancel
						</button>
					)}
				</div>
			</div>
		</form>
	);
};

export default QuizForm;
