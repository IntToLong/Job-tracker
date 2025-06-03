import LoginButton from '../../../components/AuthActions/LoginButton';
import SignUpButton from '../../../components/AuthActions/SignUpButton';
import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
	return (
		<>
			<header className='bg-black py-5 px-10 md:px-20 lg:px-40 flex gap-5 items-center justify-between font-space'>
				<Logo />
				<NavBar />
				<div className='flex justify-end items-center gap-8 flex-1 md:text-base xl:text-xl text-surface'>
					<LoginButton />
					<SignUpButton />
				</div>
			</header>
		</>
	);
}
