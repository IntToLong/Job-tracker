export default function NavItem({ title, href }) {
	return (
		<li className='font-space text-surface'>
			<a href={href}>{title}</a>
		</li>
	);
}
