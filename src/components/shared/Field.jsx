import React from 'react';

const Field = ({ label, htmlFor, children, error, className = '' }) => {
	const id = htmlFor || getChildId(children);
	return (
		<div className="mb-4">
			{label && (
				<label htmlFor={id} className={`block mb-2 ${className}`}>
					{label}
				</label>
			)}
			{children}
			{error && <p className="text-red-500">{error.message}</p>}
		</div>
	);
};
const getChildId = (children) => {
	const child = React.Children.only(children);
	if ('id' in child?.props) {
		return child.props.id;
	}
};

export default Field;
