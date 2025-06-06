import { useState } from 'react';

import openedEye from '../../assets/eye-open.svg';
import closedEye from '../../assets/eye-close.svg';

export default function FloatingLabelInput({
	title,
	type,
	showToggle,
	errors,
	...props
}) {
	const [inputType, setInputType] = useState('password');

	function handlePasswordVisibility() {
		setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
	}
	return (
		<div className='w-full relative text-[#676666] focus-within:text-black'>
			<label className='absolute -top-3 left-3 px-2 bg-white text-center z-10 '>
				{title}
			</label>
			<div className='relative'>
				<input
					className='w-full border-[#676666] border-1 h-12 rounded-[10px] px-5'
					type={type === 'password' ? inputType : type}
					{...props}
				/>
				{showToggle && (
					<button
						onClick={handlePasswordVisibility}
						type='button'>
						<img
							src={inputType === 'password' ? closedEye : openedEye}
							alt={inputType === 'password' ? 'closed eye' : 'opened eye'}
							width='30'
							className='absolute top-[9px] right-3'
						/>
					</button>
				)}
			</div>
			{errors && (
				<p
					role='alert'
					className='pl-3'>
					<span className='text-red-600'>* </span>
					{errors.message}
				</p>
			)}
		</div>
	);
}
