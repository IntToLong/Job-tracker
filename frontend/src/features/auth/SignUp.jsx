import FloatingLabelInput from '../../components/form/FloatingLabelInput';
import SubmitButton from '../../components/form/SubmitButton';
import AuthDivider from './AuthDivider';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm';
import AuthCard from './AuthCard';
import AuthAside from './AuthAside';

export default function SignUp() {
	return (
		<AuthCard isSignUp>
			<div className='font-outfit bg-white w-full md:w-3/5 md:rounded-e-4xl flex '>
				<div className='w-3/5 flex flex-col my-auto ml-20 lg:ml-30 gap-y-12 -scale-x-100'>
					<h2 className='text-4xl font-bold'>Create Account</h2>
					<AuthForm>
						<FloatingLabelInput title='Name' />
						<FloatingLabelInput title='Email' />
						<FloatingLabelInput title='Password' />
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
