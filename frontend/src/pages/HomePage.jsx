import { useAuth } from '../context/authContext';

import Footer from '../features/Home/Footer/Footer';
import Header from '../features/Home/Header/Header';

export default function Home() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
}

