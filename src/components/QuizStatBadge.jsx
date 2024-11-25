const QuizStatBadge = ({ bgColor, textColor, label }) => {
	return (
		<div
			className={`w-fit ${bgColor} ${textColor} text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2`}
		>
			{label}
		</div>
	);
};

export default QuizStatBadge;
