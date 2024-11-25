import Avatar from '../assets/avatar.webp';
const LeaderboardItem = ({ data }) => {
	return (
		<li className="flex items-center justify-between">
			<div className="flex items-center">
				<img
					src={Avatar}
					alt="SPD Smith"
					className="object-cover w-10 h-10 rounded-full mr-4"
				/>
				<div>
					<h3 className="font-semibold">{data.name}</h3>
					<p className="text-sm text-gray-500">{data.position}</p>
				</div>
			</div>
			<div className="flex items-center">
				<span className="mr-2">{data.score}</span>
			</div>
		</li>
	);
};

export default LeaderboardItem;
