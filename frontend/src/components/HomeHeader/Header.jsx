import LoginButton from '../AuthActions/LoginButton';
import SignUpButton from '../AuthActions/SignUpButton';
import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
	return (
		<>
			<header className='bg-black p-5 flex items-center justify-between'>
				<Logo />
				<NavBar />
				<div>
					<LoginButton />
					<SignUpButton />
				</div>
			</header>
		</>
	);
}
