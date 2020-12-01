import React from 'react';

const Input = ({
	placeholder,
	value,
	onChange = () => {},
	onInput = () => {},
	onClick = () => {},
	style = {},
}) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onInput={onInput}
			onClick={onClick}
			style={style}
		/>
	);
};

export default Input;
