import Footer from './Footer';
import Header from './Header/Header';

export default function HomePage() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
}
