import Footer from '../features/home/Footer';
import Header from '../features/home/Header/Header';

export default function HomePage() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
}
