import NavLink from '../../../components/UI/NavLink';

export default function NavBar() {
	const navLinksData = [
		{ id: 1, href: '#home', title: 'Home' },
		{ id: 2, href: '#features', title: 'Features' },
		{ id: 3, href: '#contact', title: 'Contact' },
	];
	return (
		<nav className='text-surface flex-1'>
			<ul className='hidden md:flex-center flex-row gap-5 lg:gap-15 text-base xl:text-xl'>
				{navLinksData.map((link) => (
					<NavLink
						key={link.id}
						href={link.href}
						className='font-space text-surface hover:text-accent'>
						{link.title}
					</NavLink>
				))}
			</ul>
		</nav>
	);
}
