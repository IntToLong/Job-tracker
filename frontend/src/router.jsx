import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import NotFound from './pages/NotFoundPage';
import Home from './pages/HomePage';

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
