const calculateCorrectCount = (submittedAnswers, correctAnswers) => {
	return submittedAnswers.reduce((count, answer) => {
		const correctAnswer = correctAnswers.find(
			(ca) => ca.question_id === answer.question_id
		);
		return correctAnswer && correctAnswer.answer === answer.answer
			? count + 1
			: count;
	}, 0);
};

const calculateMarksObtained = (submittedAnswers, correctAnswers) => {
	return submittedAnswers.reduce((total, answer) => {
		const correctAnswer = correctAnswers.find(
			(ca) => ca.question_id === answer.question_id
		);
		return correctAnswer && correctAnswer.answer === answer.answer
			? total + correctAnswer.marks
			: total;
	}, 0);
};

const processAttempts = (attempts, currentUserId) => {
	const userAttempt = attempts.find(
		(attempt) => attempt.user.id === currentUserId
	);
	if (!userAttempt) return null;
	return {
		...userAttempt,
		correctCount: calculateCorrectCount(
			userAttempt.submitted_answers,
			userAttempt.correct_answers
		),
		marksObtained: calculateMarksObtained(
			userAttempt.submitted_answers,
			userAttempt.correct_answers
		),
	};
};

const calculateLeaderboard = (attempts, currentUserId) => {
	const leaderboard = attempts.map((attempt) => {
		const score = attempt.submitted_answers.reduce((acc, submitted) => {
			const correctAnswer = attempt.correct_answers.find(
				(correct) => correct.question_id === submitted.question_id
			);
			if (correctAnswer && correctAnswer.answer === submitted.answer) {
				return acc + correctAnswer.marks;
			}
			return acc;
		}, 0);
		return {
			id: attempt.user.id,
			name: attempt.user.full_name,
			email: attempt.user.email,
			score,
		};
	});

	const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);

	const currentUserIndex = sortedLeaderboard.findIndex(
		(user) => user.id === currentUserId
	);

	sortedLeaderboard.forEach((user, index) => {
		user.position = `${index + 1}${getOrdinalSuffix(index + 1)}`;
	});

	return {
		leaderboard: sortedLeaderboard,
		currentUserPosition:
			currentUserIndex !== -1
				? sortedLeaderboard[currentUserIndex].position
				: null,
	};
};
const getOrdinalSuffix = (num) => {
	if (num === 1) return 'st';
	if (num === 2) return 'nd';
	if (num === 3) return 'rd';
	return 'th';
};

const getOptionClass = (option, correctAnswer, submittedAnswer) => {
	if (option === correctAnswer)
		return 'bg-green-100 text-green-800 border-green-300';
	if (option === submittedAnswer && option !== correctAnswer)
		return 'bg-red-100 text-red-800 border-red-300';
	return 'bg-gray-100 text-gray-800 border-gray-300';
};
const getUserChoiceIndicator = (option, correctAnswer, submittedAnswer) => {
	if (option === submittedAnswer) {
		return option === correctAnswer ? '✓' : '✗';
	}
	return null;
};

const shuffleArray = (array) => {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		// Swapping elements with destructuring
		[shuffledArray[i], shuffledArray[randomIndex]] = [
			shuffledArray[randomIndex],
			shuffledArray[i],
		];
	}
	return shuffledArray;
};

export {
	calculateCorrectCount,
	calculateLeaderboard,
	calculateMarksObtained,
	getOptionClass,
	getUserChoiceIndicator,
	processAttempts,
	shuffleArray,
};
