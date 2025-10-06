import Logo from '../../../components/UI/Logo';
import NavBar from './NavBar';
import NavLink from '../../../components/UI/NavLink';

export default function Header() {
	return (
		<>
			<header className='bg-black py-5 px-10 md:px-20 lg:px-40 flex gap-5 items-center justify-between font-space'>
				<Logo />
				<NavBar />
				<div className='flex justify-end items-center gap-8 flex-1 md:text-base xl:text-xl text-surface'>
					<NavLink
						to='/login'
						className='text-surface'>
						Login
					</NavLink>
					<NavLink
						to='/register'
						className='bg-accent text-black py-2 px-4 rounded-md'>
						Sign Up
					</NavLink>
				</div>
			</header>
		</>
	);
}
