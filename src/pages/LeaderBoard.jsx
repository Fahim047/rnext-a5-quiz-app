import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../assets/avatar.webp';
import { useAxios } from '../hooks';
import { calculateLeaderboard } from '../utils';
const LeaderBoard = () => {
	const [leaderboard, setLeaderboard] = useState([]);
	const [loading, setLoading] = useState();
	const { api } = useAxios();
	const { quizSetId } = useParams();
	console.log(leaderboard);

	useEffect(() => {
		const fetchLeaderboard = async () => {
			setLoading(true);
			try {
				const response = await api.get(`/api/quizzes/${quizSetId}/attempts`);
				const quizData = response.data.data;
				const lb = calculateLeaderboard(quizData.attempts);
				setLeaderboard(lb);
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		fetchLeaderboard();
	}, [api, quizSetId]);

	if (loading) {
		return <div>Loading...</div>;
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
							<h2 className="text-2xl font-bold">{leaderboard[0]?.name}</h2>
							<p className="text-xl">20 Position</p>
						</div>
						<div className="grid grid-cols-3 gap-4 mb-6">
							<div className="text-center">
								<p className="text-sm opacity-75">Mark</p>
								<p className="text-2xl font-bold">1200</p>
							</div>
							<div className="text-center">
								<p className="text-sm opacity-75">Correct</p>
								<p className="text-2xl font-bold">08</p>
							</div>
							<div className="text-center">
								<p className="text-sm opacity-75">Wrong</p>
								<p className="text-2xl font-bold">16</p>
							</div>
						</div>
					</div>
					{/* <!-- Right Column --> */}
					<div>
						<h1 className="text-2xl font-bold">Leaderboard</h1>
						<p className="mb-6">React Hooks Quiz</p>
						<ul className="space-y-4">
							{/* <!-- Leaderboard Item --> */}
							{[1, 2, 3, 4].map((item) => (
								<li key={item} className="flex items-center justify-between">
									<div className="flex items-center">
										<img
											src={Avatar}
											alt="SPD Smith"
											className="object-cover w-10 h-10 rounded-full mr-4"
										/>
										<div>
											<h3 className="font-semibold">SPD Smith</h3>
											<p className="text-sm text-gray-500">1st</p>
										</div>
									</div>
									<div className="flex items-center">
										<span className="mr-2">2,340</span>
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

export default LeaderBoard;
