const HomePageSkeleton = () => {
	return (
		<div>
			<main className="bg-white p-6 rounded-md h-full animate-pulse">
				<section>
					<div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
					{/* <!-- Cards --> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* <!-- Card --> */}
						<div className="rounded-lg overflow-hidden">
							<div className="h-80 bg-gray-200"></div>
						</div>
						{/* <!-- Card --> */}
						<div className="rounded-lg overflow-hidden">
							<div className="h-80 bg-gray-200"></div>
						</div>
						{/* <!-- Card --> */}
						<div className="rounded-lg overflow-hidden">
							<div className="h-80 bg-gray-200"></div>
						</div>
						{/* <!-- Card --> */}
						<div className="rounded-lg overflow-hidden">
							<div className="h-80 bg-gray-200"></div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomePageSkeleton;
