import { Link } from 'react-router-dom';

export default function AuthFooter({ message, cta, link }) {
	return (
		<div className='text-center'>
			<p className='text-[#676666]'>{message}</p>
			<Link
				to={link}
				className='cursor-pointer text-[#5A30D3] font-medium'>
				{cta}
			</Link>
		</div>
	);
}
