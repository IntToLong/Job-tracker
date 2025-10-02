import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({ name: localStorage.getItem('name') });
	const [token, setToken] = useState(null);

	useEffect(() => {
		const refreshToken = async () => {
			try {
				const res = await axios.post(
					'http://localhost:5000/api/auth/refresh',
					{},
					{ withCredentials: true }
				);

				setToken(res.data.accessToken);
			} catch (err) {
				console.error(err);
				setToken('');
			}
		};

		refreshToken();
	}, []);

	useEffect(() => {
		localStorage.setItem('name', user.name);
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, setUser, token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
