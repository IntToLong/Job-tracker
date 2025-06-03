import NavItem from './NavItem';
export default function NavBar() {
	return (
		<nav className='text-surface'>
			<ul className='flex-center space-x-3 text-2xl'>
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

