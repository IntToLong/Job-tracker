import Footer from '../features/Home/Footer';
import Header from '../features/Home/Header/Header';

export default function HomePage() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
}
