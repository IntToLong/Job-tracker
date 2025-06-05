import AuthCard from './AuthCard';
import AuthForm from './AuthForm';
import FloatingLabelInput from '../../components/form/FloatingLabelInput';
import AuthDivider from './AuthDivider';
import AuthFooter from './AuthFooter';
import SubmitButton from '../../components/form/SubmitButton';
import AuthAside from './AuthAside';

export default function Login() {
	return (
		<AuthCard>
			<div className='font-outfit bg-white w-full md:w-3/5 md:rounded-e-4xl flex'>
				<div className='w-3/5 flex flex-col my-auto ml-20 lg:ml-30 gap-y-12'>
					<h2 className='text-4xl font-bold'>Welcome back!</h2>
					<AuthForm>
						<FloatingLabelInput title='Email' type='email'/>
						<FloatingLabelInput title='Password' type='password'/>
						<SubmitButton>Login</SubmitButton>
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
