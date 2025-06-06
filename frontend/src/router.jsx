import { createBrowserRouter } from 'react-router-dom';
import Login from './features/auth/Login';
import SignUp from './features/auth/Signup';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <SignUp />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
