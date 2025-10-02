import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

import FloatingLabelInput from '../components/form/FloatingLabelInput';
import { SignUpSchema } from '../features/auth/validation/schemas';
import SubmitButton from '../components/form/SubmitButton';
import AuthDivider from '../features/auth/AuthDivider';
import AuthFooter from '../features/auth/AuthFooter';
import AuthAside from '../features/auth/AuthAside';
import AuthCard from '../features/auth/AuthCard';
import AuthForm from '../features/auth/AuthForm';

export default function SignUp() {
	const [axiosError, setAxiosError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(SignUpSchema) });

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post('http://localhost:5000/api/auth/register', data)
			.then(() => {
				setAxiosError('');
				navigate('/');
			})
			.catch((error) => {
				setAxiosError(
					error.status === 403
						? 'Email has already used.'
						: error.response.data.message
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<AuthCard isSignUp>
			<div className='font-outfit bg-white w-full md:w-3/5 md:rounded-e-4xl flex '>
				<div className='w-3/5 flex flex-col my-auto ml-20 lg:ml-30 gap-y-12 -scale-x-100'>
					<h2 className='text-4xl font-bold'>Create Account</h2>
					<AuthForm onSubmit={handleSubmit(onSubmit)}>
						{axiosError && (
							<p
								role='alert'
								className='bg-red-100 w-full text-red-600 h-12 text-center rounded-[10px] p-2 flex-center'>
								<span>{axiosError}</span>
							</p>
						)}
						<div className='w-full'>
							<FloatingLabelInput
								title='Name'
								type='text'
								placeholder='at least 2 characters'
								errors={errors.name}
								{...register('name')}
							/>
						</div>
						<FloatingLabelInput
							title='Email'
							type='email'
							placeholder='example@gmail.com'
							errors={errors.email}
							{...register('email')}
						/>
						<FloatingLabelInput
							title='Password'
							type='password'
							placeholder='at least 6 characters'
							showToggle
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
								'Create Account'
							)}
						</SubmitButton>
					</AuthForm>
					<AuthDivider />
					<AuthFooter
						message='Already have an account?'
						cta='Login'
						link='/login'
					/>
				</div>
			</div>
			<AuthAside isSignUp />
		</AuthCard>
	);
}
