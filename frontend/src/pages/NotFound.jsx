import error from '../assets/error-ilustration.svg';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<section className='bg-error h-screen bg-cover flex-center font-space select-none'>
			<div className='flex-auto text-6xl text-center px-5'>
				<h2 className='font-bold self-center'>Ooops...</h2>
				<p>Page not found</p>
				<div className='my-20'>
					<Link
						to='/'
						className='bg-accent text-3xl px-7 py-4 rounded-xl'>
						<span className='pr-2'> &#8672;</span>
						<span>Go back</span>
					</Link>
				</div>
			</div>
			<div className='flex-auto hidden lg:block'>
				<img
					src={error}
					alt='people'
				/>
			</div>
		</section>
	);
}
