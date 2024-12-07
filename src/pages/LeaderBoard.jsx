import { Link, useParams } from 'react-router-dom';
import Avatar from '../assets/avatar.webp';
import LeaderboardItem from '../components/LeaderboardItem';
import LeaderboardSkeleton from '../components/skeletons/LeaderboardSkeleton';
import { useAuth, useQuizSetData } from '../hooks';
const LeaderBoard = () => {
	const { auth } = useAuth();
	const { quizSetId } = useParams();
	const { quizData, loading, error } = useQuizSetData(quizSetId);

	if (loading) {
		return <LeaderboardSkeleton />;
	}
	if (error) {
		return (
			<div className="h-[300px] text-3xl flex items-center justify-center text-red-500">
				{error}
			</div>
		);
	}
	return (
		<main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
				<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* <!-- Left Column --> */}
					<div className="bg-primary rounded-lg p-6 text-white">
						<div className="flex flex-col items-center mb-6">
							<img
								src={Avatar}
								alt="Profile Pic"
								className="w-20 h-20 rounded-full border-4 border-white mb-4 object-cover"
							/>
							<h2 className="text-2xl font-bold">{auth?.user.full_name}</h2>
							<p className="text-xl">{quizData.currentUserPosition}</p>
						</div>
						<div className="grid grid-cols-3 gap-4 mb-6">
							<div className="text-center">
								<p className="text-sm opacity-75">Mark</p>
								<p className="text-2xl font-bold">
									{quizData.userScore}/{quizData.totalMarks}
								</p>
							</div>
							<div className="text-center">
								<p className="text-sm opacity-75">Correct</p>
								<p className="text-2xl font-bold">{quizData.correctCount}</p>
							</div>
							<div className="text-center">
								<p className="text-sm opacity-75">Wrong</p>
								<p className="text-2xl font-bold">{quizData.wrongCount}</p>
							</div>
						</div>
						<Link
							to={`/result/${quizSetId}`}
							className=" bg-secondary py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium underline text-white"
						>
							View Result
						</Link>
					</div>
					{/* <!-- Right Column --> */}
					<div>
						<h1 className="text-2xl font-bold">Leaderboard</h1>
						<p className="mb-6">{quizData.title}</p>
						<ul className="space-y-4">
							{/* <!-- Leaderboard Item --> */}
							{quizData.leaderboard.slice(0, 5).map((item) => (
								<LeaderboardItem key={item.id} item={item} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LeaderBoard;
