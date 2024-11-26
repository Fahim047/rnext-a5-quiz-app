import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAxios } from '../../hooks';
import { Toast } from '../../sweetalert/Toast';

const QuizSetForm = () => {
	const { quizSetId } = useParams();
	const { api } = useAxios();
	const navigate = useNavigate();
	const [quizSet, setQuizSet] = useState(null);
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
	} = useForm();

	useEffect(() => {
		if (quizSetId) {
			const fetchQuizSet = async () => {
				setLoading(true);
				try {
					const response = await api.get('/api/admin/quizzes');
					if (response.status === 200) {
						const requiredData = response.data.find(
							(item) => item.id === quizSetId
						);
						setQuizSet(requiredData);
						if (requiredData) {
							const { title, description } = requiredData;
							setValue('quiz-title', title);
							setValue('quiz-description', description);
						} else {
							console.log('Quiz set not found');
						}
					}
				} catch (error) {
					console.error('Error fetching quiz set:', error);
				} finally {
					setLoading(false);
				}
			};
			fetchQuizSet();
		}
	}, [quizSetId, api, setValue]);

	const handleSaveQuizSet = async (formData) => {
		const formattedData = {
			title: formData['quiz-title'],
			description: formData['quiz-description'],
		};

		try {
			if (quizSetId) {
				const response = await api.patch(
					`/api/admin/quizzes/${quizSetId}`,
					formattedData
				);
				if (response.status === 200) {
					Toast.fire({
						icon: 'success',
						title: 'Quiz updated successfully',
					});
					navigate(`/admin/quiz-set-entry-page/${quizSetId}`);
				}
			} else {
				const response = await api.post('/api/admin/quizzes', formattedData);
				if (response.status === 201) {
					const { id } = response.data.data;
					navigate(`/admin/quiz-set-entry-page/${id}`);
					Toast.fire({
						icon: 'success',
						title: 'Quiz created successfully',
					});
				}
			}
			reset({
				'quiz-title': '',
				'quiz-description': '',
			});
		} catch (error) {
			console.error('Error saving quiz set:', error);
		}
	};

	if (loading) return <div>Loading...</div>;

	return (
		<form onSubmit={handleSubmit(handleSaveQuizSet)}>
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
				{errors['quiz-title'] && (
					<p className="text-red-600 text-sm">{errors['quiz-title'].message}</p>
				)}
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
				{quizSetId ? 'Update' : 'Next'}
			</button>
		</form>
	);
};

export default QuizSetForm;
