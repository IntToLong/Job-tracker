export default function FloatingLabelInput({ title }) {
	return (
		<div className='w-full relative text-[#676666]'>
			<label className='absolute -top-3 left-3 px-2 bg-white text-center z-10'>
				{title}
			</label>
			<input
				className='w-full border-[#676666] border-1 h-12 rounded-[10px] '
				type='text'
			/>
		</div>
	);
}
