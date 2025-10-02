import FacebookIcon from '../../assets/facebook.svg?react';
import LinkedinIcon from '../../assets/linkedin.svg?react';
import GitHubIcon from '../../assets/github.svg?react';
import XIcon from '../../assets/x.svg?react';

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
				<ul className='flex-center gap-10 text-surface'>
					<li>
						<a
							href='https://www.linkedin.com/in/nataliia-l-aa785127a/'
							target='_blank'>
							<LinkedinIcon className='w-5 h-5 hover:text-accent' />
						</a>
					</li>
					<li>
						<a
							href='https://github.com/IntToLong/Job-tracker'
							target='_blank'>
							<GitHubIcon className='w-5 h-5 hover:text-accent' />
						</a>
					</li>
					<li>
						<a href='#'>
							<FacebookIcon className='w-5 h-5 hover:text-accent' />
						</a>
					</li>

					<li>
						<a href='#'>
							<XIcon className='w-5 h-5 hover:text-accent' />
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}
