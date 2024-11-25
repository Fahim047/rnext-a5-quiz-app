import React from 'react';

const QuizFormSkeleton = () => {
	return (
		<div className="lg:col-span-2 bg-white">
			<div className="bg-white p-6 rounded-md">
				<div className="h-6 w-2/3 bg-gray-200 animate-pulse rounded mb-4"></div>
				<div className="grid grid-cols-2 gap-4 mb-6">
					{Array(4)
						.fill(0)
						.map((_, index) => (
							<div
								key={index}
								className="flex items-center space-x-3 py-3 px-4 bg-gray-200 animate-pulse rounded-md"
							>
								<div className="h-4 w-4 rounded-full bg-gray-300"></div>
								<div className="h-4 w-3/4 bg-gray-300 rounded"></div>
							</div>
						))}
				</div>
				<div className="flex justify-between">
					<div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
					<div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default QuizFormSkeleton;
