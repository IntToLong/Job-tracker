export default function NavItem({ title, href }) {
	return (
		<li className='font-space text-surface hover:text-accent'>
			<a href={href}>{title}</a>
		</li>
	);
}
