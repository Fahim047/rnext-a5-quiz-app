import { useEffect, useState } from 'react';
import { calculateLeaderboard, processAttempts } from '../utils';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useQuizSetData = (quizSetId) => {
	const { auth } = useAuth();
	const userId = auth?.user?.id;
	const { api } = useAxios();
	const [quizData, setQuizData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchQuizData = async () => {
			setLoading(true);
			setError(null);

			try {
				// Fetch attempts and quiz metadata
				const [attemptsResponse, quizResponse] = await Promise.all([
					api.get(`/api/quizzes/${quizSetId}/attempts`),
					api.get(`/api/quizzes/${quizSetId}`),
				]);

				if (attemptsResponse.status === 200 && quizResponse.status === 200) {
					const attemptsData = attemptsResponse.data.data;
					const quizMetaData = quizResponse.data.data;
					console.log(quizMetaData);

					// Process leaderboard
					const { leaderboard, currentUserPosition } = calculateLeaderboard(
						attemptsData.attempts,
						userId
					);

					// Process current user's attempt
					const userAttempt = processAttempts(attemptsData.attempts, userId);

					const computedData = {
						quizSetId,
						title: quizMetaData.title,
						description: quizMetaData.description,
						totalQuestions: quizMetaData.stats.total_questions,
						totalMarks: quizMetaData.stats.total_marks,
						totalAttempts: attemptsData.stats.total_attempts,
						averageScore: attemptsData.stats.average_score,
						highestScore: attemptsData.stats.highest_score,
						questions: quizMetaData.questions,
						leaderboard,
						currentUserPosition,
						userAttempt,
						correctCount: userAttempt ? userAttempt.correctCount : 0,
						wrongCount: userAttempt
							? userAttempt.submitted_answers.length - userAttempt.correctCount
							: 0,
						userScore: userAttempt ? userAttempt.marksObtained : 0,
						userScorePercentage: userAttempt
							? Math.round(
									(userAttempt.correctCount /
										userAttempt.submitted_answers.length) *
										100
							  )
							: 0,
					};

					setQuizData(computedData);
				} else {
					throw new Error('Failed to fetch quiz data.');
				}
			} catch (err) {
				setError(err.message || 'An error occurred while fetching quiz data.');
			} finally {
				setLoading(false);
			}
		};

		fetchQuizData();
	}, [quizSetId, userId, api]);

	return { quizData, loading, error };
};

export default useQuizSetData;
