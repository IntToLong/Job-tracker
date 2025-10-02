import { useAuth } from '../context/authContext';

export default function Home() {
	const { user } = useAuth();
	return <p>Hello, {user.name}!</p>;
}
