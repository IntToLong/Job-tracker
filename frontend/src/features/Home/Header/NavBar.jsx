import NavItem from './NavItem';
export default function NavBar() {
	return (
		<nav className='text-surface flex-1'>
			<ul className='hidden md:flex-center flex-row gap-5 lg:gap-15 text-base xl:text-xl'>
				<NavItem
					title='Home'
					href='#home'
				/>
				<NavItem
					title='Features'
					href='#features'
				/>
				<NavItem
					title='Contact'
					href='#contact'
				/>
			</ul>
		</nav>
	);
}
