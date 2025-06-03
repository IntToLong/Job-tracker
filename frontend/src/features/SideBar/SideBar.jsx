import { NavLink } from 'react-router';

export function SideNav() {
	return (
		<nav>
			<NavLink
				to='/'
				end>
				user icon
			</NavLink>
			<NavLink
			
				to='/table'
				end>
				job table
			</NavLink>
			<NavLink
				to='/calendar'
				end>
				calendar icon
			</NavLink>
			<NavLink to='/dashboard'>dashboard icon</NavLink>
			<NavLink to='/design'>design settings icon</NavLink>
		</nav>
	);
}
