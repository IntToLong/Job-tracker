import logoImg from '../../../assets/logo1.svg';
import { Link } from 'react-router';

export default function Logo() {
	return (
		<Link
			to='/'
			className='flex flex-col md:flex-row items-center gap-3 flex-1'>
			<img
				className='h-10 md:h-12'
				src={logoImg}
				alt='logo'
			/>
			<span className='font-space font-semibold lg:text-2xl text-accent'>
				Job Tracker
			</span>
		</Link>
	);
}
