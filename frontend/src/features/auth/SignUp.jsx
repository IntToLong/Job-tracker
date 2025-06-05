import FloatingLabelInput from '../../components/form/FloatingLabelInput';
import SubmitButton from '../../components/form/SubmitButton';
import AuthDivider from './AuthDivider';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm';
import AuthCard from './AuthCard';
import people from '../../assets/talking-people.svg';

export default function SignUp() {
	return (
		<AuthCard>
			<div className='font-outfit bg-white w-full md:w-3/5 md:rounded-e-4xl flex'>
				<div className='w-3/5 flex flex-col my-auto ml-20 lg:ml-30 gap-y-12'>
					<h2 className='text-4xl font-bold'>Welcome back!</h2>
					<AuthForm>
						<FloatingLabelInput title='Email' />
						<FloatingLabelInput title='Password' />
						<SubmitButton>Login</SubmitButton>
					</AuthForm>
					<AuthDivider />
					<AuthFooter
						message='Don`t have an account?'
						cta='Sign Up'
					/>
				</div>
			</div>
			<div className='hidden md:block my-auto relative md:w-2/5 h-screen'>
				<p className='font-syne font-semibold text-white text-4xl lg:text-5xl mt-20 text-center '>
					Stay on top of <br /> job tracking
				</p>
				<img
					src={people}
					alt='talking people'
					className='absolute md:-left-25 lg:-left-35 xl:-left-40 top-55 object-cover'
				/>
			</div>
		</AuthCard>
	);
}
