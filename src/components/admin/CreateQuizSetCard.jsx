import React from 'react';
import { Link } from 'react-router-dom';
import Plus from '../icons/Plus';

const CreateQuizSetCard = () => {
	return (
		<Link to="./quiz-set/create" className="group">
			<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ">
				<div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
					<Plus />
				</div>
				<h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
					Create a new quiz
				</h3>
				<p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
					Build from the ground up
				</p>
			</div>
		</Link>
	);
};

export default CreateQuizSetCard;
