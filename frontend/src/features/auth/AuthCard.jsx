export default function AuthCard({ children, isSignUp }) {
	return (
		<section
			className={`bg-auth bg-cover bg-no-repeat w-full h-screen flex ${
				isSignUp ? '-scale-x-100' : ''
			}`}>
			{children}
		</section>
	);
}
