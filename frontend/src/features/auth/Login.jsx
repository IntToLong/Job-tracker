import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

import { LoginSchema } from './validation/schemas';

import AuthCard from './AuthCard';
import AuthForm from './AuthForm';
import FloatingLabelInput from '../../components/form/FloatingLabelInput';
import AuthDivider from './AuthDivider';
import AuthFooter from './AuthFooter';
import SubmitButton from '../../components/form/SubmitButton';
import AuthAside from './AuthAside';

export default function Login() {
	const [axiosError, setAxiosError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(LoginSchema) });

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post('http://localhost:5000/api/auth/login', data)
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
							title='Email'
							type='email'
							errors={errors.email}
							{...register('email')}
						/>
						<FloatingLabelInput
							title='Password'
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
