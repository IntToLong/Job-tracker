import people from '../../assets/talking-people.svg';
export default function AuthAside({ isSignUp }) {
	return (
		<div className='hidden md:block my-auto relative md:w-2/5 h-screen'>
			<p
				className={`font-syne font-semibold text-white text-4xl lg:text-5xl mt-20 text-center ${
					isSignUp ? '-scale-x-100' : ''
				}`}>
				Stay on top of <br /> job tracking
			</p>
			<img
				src={people}
				alt='talking people'
				className='absolute md:-left-25 lg:-left-35 xl:-left-40 top-55 object-cover'
			/>
		</div>
	);
}
