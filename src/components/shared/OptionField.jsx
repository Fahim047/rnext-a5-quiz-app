const OptionField = ({
	id,
	name,
	label,
	placeholder,
	selected,
	onChange,
	register,
	radioName,
	radioValue,
	radioRegister,
}) => {
	return (
		<div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
			{/* Radio Input */}
			<input
				type="radio"
				id={id}
				name={radioName}
				value={radioValue}
				checked={selected}
				onChange={onChange}
				className="text-primary focus:ring-0 w-5 h-5"
				{...radioRegister}
			/>
			<label htmlFor={id} className="sr-only">
				{label}
			</label>
			{/* Option Text Input */}
			<input
				type="text"
				id={`${id}Text`}
				name={name}
				placeholder={placeholder}
				className="w-full p-2 bg-transparent rounded-md outline-none focus:ring-0"
				{...register(name, { required: `${label} is required` })}
			/>
		</div>
	);
};

export default OptionField;
