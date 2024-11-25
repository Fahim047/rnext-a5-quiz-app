import React from 'react';
import QuizFormSkeleton from './QuizFormSkeleton';
import QuizStatsSkeleton from './QuizStatsSkeleton';

const QuizTakingPageSkeleton = () => {
	return (
		<main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
				{/* Left Column Skeleton */}
				<QuizStatsSkeleton />

				{/* Right Column Skeleton */}
				<QuizFormSkeleton />
			</div>
		</main>
	);
};

export default QuizTakingPageSkeleton;
