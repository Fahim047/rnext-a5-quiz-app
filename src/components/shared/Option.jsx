const Option = () => {
	return (
		<label className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg">
			<input
				type="radio"
				name="answer"
				className="form-radio text-buzzr-purple"
			/>
			<span>0</span>
		</label>
	);
};

export default Option;
