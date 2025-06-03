import logoImg from '../../assets/logo1.svg';
import { Link } from 'react-router';

export default function Logo() {
    return (
			<Link
				to='/'
				className='flex items-center gap-3'>
				<img
					className='h-12'
					src={logoImg}
					alt='logo'
				/>
				<span className='font-space font-semibold text-2xl  text-accent'>
					Job Tracker
				</span>
			</Link>
		);
}
