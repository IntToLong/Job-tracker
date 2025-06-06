
export default function SubmitButton({ children, ...props }) {
	return (
		<button
			className='text-white bg-[#212121] rounded-[10px] py-3 px-7 w-full cursor-pointer'
            type='submit'
			{...props}>
			{children}
		</button>
	);
}
