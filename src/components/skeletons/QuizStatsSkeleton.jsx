import React from 'react';

const QuizStatsSkeleton = () => {
	return (
		<div className="lg:col-span-1 bg-white rounded-md p-6 h-full flex flex-col">
			<div>
				<div className="h-8 w-2/3 bg-gray-200 animate-pulse rounded mb-4"></div>
				<div className="h-4 w-full bg-gray-200 animate-pulse rounded mb-4"></div>
				<div className="flex flex-col space-y-3">
					<div className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
					<div className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
					<div className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
				</div>
			</div>
			<div className="mt-auto flex items-center">
				<div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse mr-3"></div>
				<div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
			</div>
		</div>
	);
};

export default QuizStatsSkeleton;
