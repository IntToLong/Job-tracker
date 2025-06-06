import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FloatingLabelInput from '../../components/form/FloatingLabelInput';
import { SignUpSchema } from './validation/schemas';
import SubmitButton from '../../components/form/SubmitButton';
import AuthDivider from './AuthDivider';
import AuthFooter from './AuthFooter';
import AuthAside from './AuthAside';
import AuthCard from './AuthCard';
import AuthForm from './AuthForm';

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(SignUpSchema) });

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<AuthCard isSignUp>
			<div className='font-outfit bg-white w-full md:w-3/5 md:rounded-e-4xl flex '>
				<div className='w-3/5 flex flex-col my-auto ml-20 lg:ml-30 gap-y-12 -scale-x-100'>
					<h2 className='text-4xl font-bold'>Create Account</h2>
					<AuthForm onSubmit={handleSubmit(onSubmit)}>
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
						<SubmitButton>Create Account</SubmitButton>
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

{
	/* <div className='hidden'>
	<p>
		<span className='text-red-500'>*</span> Please provide your name
	</p>
	<p>
		<span className='text-red-500'>*</span> Please provide your email
	</p>
	<p>
		<span className='text-red-500'>*</span> Password should be at least 6
		symbols long
	</p>
</div>; */
}
