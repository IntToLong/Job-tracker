import { Link } from 'react-router';

export default function SignUpButton() {
	return (
		<Link
			to='/register'
			className='bg-accent text-black py-2 px-4 rounded-md'>
			Sign Up
		</Link>
	);
}
