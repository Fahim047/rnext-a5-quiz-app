export const quizSets = [
	{
		id: 1,
		title: 'Binary Trees Quiz',
		questions: [
			{
				id: 1,
				question:
					'Which of the following is NOT a binary tree traversal method?',
				options: [
					{ id: 'a', text: 'Inorder' },
					{ id: 'b', text: 'Preorder' },
					{ id: 'c', text: 'Postorder' },
					{ id: 'd', text: 'Crossorder' },
				],
				correctAnswer: 'd',
			},
			{
				id: 2,
				question: 'What is the time complexity of binary search?',
				options: [
					{ id: 'a', text: 'O(n)' },
					{ id: 'b', text: 'O(log n)' },
					{ id: 'c', text: 'O(n^2)' },
					{ id: 'd', text: 'O(1)' },
				],
				correctAnswer: 'b',
			},
		],
	},
	{
		id: 2,
		title: 'Data Structures Quiz',
		questions: [
			{
				id: 1,
				question: 'Which data structure is used for depth-first traversal?',
				options: [
					{ id: 'a', text: 'Queue' },
					{ id: 'b', text: 'Stack' },
					{ id: 'c', text: 'Linked List' },
					{ id: 'd', text: 'Tree' },
				],
				correctAnswer: 'b',
			},
			{
				id: 2,
				question: 'Which data structure allows LIFO access?',
				options: [
					{ id: 'a', text: 'Queue' },
					{ id: 'b', text: 'Binary Tree' },
					{ id: 'c', text: 'Stack' },
					{ id: 'd', text: 'Graph' },
				],
				correctAnswer: 'c',
			},
		],
	},
];
