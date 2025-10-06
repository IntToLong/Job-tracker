import { Link } from 'react-router';

export default function NavLink({ to, href, className, children }) {
	if (href) {
		return (
			<a
				href={href}
				className={className}>
				{children}
			</a>
		);
	}
	return (
		<Link
			to={to}
			className={className}>
			{children}
		</Link>
	);
}
