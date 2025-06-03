
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github-mark-white.svg';
import x from '../../assets/x.svg';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className='hidden lg:flex bg-black py-5 px-40  gap-5 items-center justify-between font-space text-accent'>
			<section className='flex-center gap-10'>
				<p>&copy; {year} Job Tracker, Inc</p>
				<a href='#'>Privacy Policy</a>
				<a href='#'>Terms of Service</a>
			</section>
			<section>
				<ul className='flex-center gap-10'>
					<li>
						<a
							href='https://www.linkedin.com/in/nataliia-l-aa785127a/'
							target='_blank'>
							<img
								src={linkedin}
								width='20'
								height='20'
								alt={'linkedin icon'}
							/>
						</a>
					</li>
					<li>
						<a
							href='https://github.com/IntToLong/Job-tracker'
							target='_blank'>
							<img
								src={github}
								width='20'
								height='20'
								alt={'github icon'}
							/>
						</a>
					</li>
					<li>
						<a href='#'>
							<img
								src={facebook}
								width='10'
								max-height='20'
								alt={'facebook icon'}
							/>
						</a>
					</li>

					<li>
						<a href='#'>
							<img
								src={x}
								width='19'
								height='20'
								alt={'x icon'}
							/>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}
