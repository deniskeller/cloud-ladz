import React from 'react';
import s from './BaseInput.module.scss';

interface Props {
	type?: string;
	name: string;
	label?: string;
	min?: number;
	max?: number;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	autocomplete?: string;
	error?: string | boolean;
	value: string | number;
	onChange(value: string | number): void;
	onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
	value,
	label,
	type = 'text',
	error,
	name,
	min,
	max,
	required = false,
	disabled = false,
	placeholder,
	className = '',
	autocomplete = 'off',
	onChange,
	onKeyDown,
}) => {
	return (
		<div
			className={`${s.BaseInput} ${className} ${error ? s.BaseInputError : ''}`}
		>
			{label ? (
				<label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
					{label}
				</label>
			) : null}

			<input
				value={value}
				type={type}
				className={`${s.Input} ${error ? s.Error : ''}`}
				name={name}
				min={min}
				max={max}
				placeholder={placeholder}
				required={required}
				autoComplete={autocomplete}
				disabled={disabled}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					onChange(e.target.value)
				}
				onKeyDown={onKeyDown}
			/>

			{error ? (
				<div className={s.ErrorText}>
					<span>{error}</span>
				</div>
			) : (
				''
			)}
		</div>
	);
};
export default BaseInput;
