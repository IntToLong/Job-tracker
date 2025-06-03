import { Link } from 'react-router';

export default function SignUpButton() {
	return (
		<Link
			to='/register'
			className='text-2xl bg-accent text-black py-2 px-3'>
			Sign Up
		</Link>
	);
}
