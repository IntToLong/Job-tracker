import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

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
		path:'/',
		element: <Home />
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
