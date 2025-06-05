export default function AuthForm({ children, ...props }) {
	return (
		<form
			className='flex flex-col items-center m-auto gap-y-7 w-full'
			{...props}>
			{children}
		</form>
	);
}
