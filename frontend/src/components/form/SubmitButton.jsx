
export default function SubmitButton({ children, ...props }) {
	return (
		<button
			className='text-white bg-[#212121] rounded-[10px] py- h-12 px-7 w-full cursor-pointer flex-center'
			type='submit'
			{...props}>
			{children}
		</button>
	);
}
