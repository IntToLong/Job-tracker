import { useAuth } from '../context/authContext';

import Footer from '../features/Footer/Footer';
import Header from '../features/Header/Header';

export default function Home() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
}

