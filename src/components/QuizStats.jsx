import React from 'react';
import Avatar from '../assets/avatar.webp';
const QuizStats = ({ quizSet }) => {
	if (!quizSet) {
		return null;
	}
	return (
		<div className="lg:col-span-1 bg-white rounded-md p-6 h-full flex flex-col">
			<div>
				<h2 className="text-4xl font-bold mb-4">{quizSet?.title}</h2>
				<p className="text-gray-600 mb-4">{quizSet?.description}</p>

				<div className="flex flex-col">
					<div className="w-fit bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
						Total number of questions : {quizSet?.stats?.total_questions}
					</div>

					<div className="w-fit bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
						Participation : 1
					</div>

					<div className="w-fit bg-gray-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
						Remaining : 9
					</div>
				</div>
			</div>

			<div className="mt-auto flex items-center">
				<img
					src={Avatar}
					alt="Mr Hasan"
					className="w-10 h-10 rounded-full mr-3 object-cover"
				/>
				<span className="text-black font-semibold">Saad Hasan</span>
			</div>
		</div>
	);
};

export default QuizStats;
