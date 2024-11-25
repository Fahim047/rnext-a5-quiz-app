const LeaderboardSkeleton = () => {
	return (
		<main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
				<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left Column Skeleton */}
					<div className="bg-gray-200 rounded-lg p-6">
						<div className="flex flex-col items-center mb-6">
							<div className="w-20 h-20 rounded-full border-4 border-gray-200 mb-4 bg-gray-200 animate-pulse"></div>
							<div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded mb-2"></div>
							<div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded"></div>
						</div>
						<div className="grid grid-cols-3 gap-4 mb-6">
							<div className="text-center">
								<div className="h-4 w-12 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
								<div className="h-6 w-16 bg-gray-200 animate-pulse rounded mx-auto"></div>
							</div>
							<div className="text-center">
								<div className="h-4 w-12 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
								<div className="h-6 w-16 bg-gray-200 animate-pulse rounded mx-auto"></div>
							</div>
							<div className="text-center">
								<div className="h-4 w-12 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
								<div className="h-6 w-16 bg-gray-200 animate-pulse rounded mx-auto"></div>
							</div>
						</div>
					</div>

					{/* Right Column Skeleton */}
					<div>
						<div className="h-6 w-2/3 bg-gray-200 animate-pulse rounded mb-4"></div>
						<div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded mb-6"></div>
						<ul className="space-y-4">
							{Array(5)
								.fill(0)
								.map((_, index) => (
									<li key={index} className="flex items-center space-x-4">
										<div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
										<div className="flex-1">
											<div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded mb-2"></div>
											<div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded"></div>
										</div>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LeaderboardSkeleton;
