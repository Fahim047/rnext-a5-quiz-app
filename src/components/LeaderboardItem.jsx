import Avatar from '../assets/avatar.webp';
import { useAuth } from '../hooks';
const LeaderboardItem = ({ item }) => {
	const { auth } = useAuth();
	const isCurrentUser = auth?.user.id === item.id;
	return (
		<li
			className={`flex items-center justify-between rounded-sm p-2 ${
				isCurrentUser ? 'bg-yellow-200' : ''
			}`}
		>
			<div className="flex items-center">
				<img
					src={Avatar}
					alt="SPD Smith"
					className="object-cover w-10 h-10 rounded-full mr-4"
				/>
				<div>
					<h3 className="font-semibold">{item.name}</h3>
					<p className="text-sm text-gray-500">{item.position}</p>
				</div>
			</div>
			<div className="flex items-center">
				<span className="mr-2">{item.score}</span>
			</div>
		</li>
	);
};

export default LeaderboardItem;
