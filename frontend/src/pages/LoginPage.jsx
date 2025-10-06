import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { BeatLoader } from 'react-spinners';

import { LoginSchema } from '../features/auth/validation/schemas';

import AuthCard from '../features/auth/AuthCard';
import AuthForm from '../features/auth/AuthForm';
import FloatingLabelInput from '../components/form/FloatingLabelInput';
import AuthDivider from '../features/auth/AuthDivider';
import AuthFooter from '../features/auth/AuthFooter';
import SubmitButton from '../components/form/SubmitButton';
import AuthAside from '../features/auth/AuthAside';

export default function Login() {
	const [axiosError, setAxiosError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(LoginSchema) });
	const { setUser, setToken } = useAuth();

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post('http://localhost:5000/api/auth/login', data)
			.then((res) => {
				setUser(res.data.user);
				setToken(res.data.accessToken);
				setAxiosError('');
				navigate('/');
			})
			.catch((error) => {
				setAxiosError(
					error.status === 404
						? 'Sorry we couldn`t find your account.'
						: error.status === 401
						? 'Your password is incorrect. Try again.'
						: error.response.data.message
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<AuthCard>
			<div className='font-outfit bg-white w-full md:w-3/5 md:rounded-e-4xl flex'>
				<div className='w-3/5 flex flex-col my-auto ml-20 lg:ml-30 gap-y-12'>
					<h2 className='text-4xl font-bold'>Welcome back!</h2>
					<AuthForm onSubmit={handleSubmit(onSubmit)}>
						{axiosError && (
							<p
								role='alert'
								className='bg-red-100 w-full text-red-600 h-12 text-center rounded-[10px] p-2 flex-center'>
								<span>{axiosError}</span>
							</p>
						)}
						<FloatingLabelInput
							label='Email'
							type='email'
							errors={errors.email}
							{...register('email')}
						/>
						<FloatingLabelInput
							label='Password'
							type='password'
							errors={errors.password}
							{...register('password')}
						/>
						<SubmitButton>
							{isLoading ? (
								<BeatLoader
									color='#fff'
									margin={5}
									size={5}
								/>
							) : (
								'Login'
							)}
						</SubmitButton>
					</AuthForm>
					<AuthDivider />
					<AuthFooter
						message='Don`t have an account?'
						cta='Sign Up'
						link='/register'
					/>
				</div>
			</div>
			<AuthAside />
		</AuthCard>
	);
}
