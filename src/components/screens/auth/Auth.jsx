import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import './Auth.modules.scss'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()
	// const { logout, login } = useAuth()

	return (
		<>
			<Layout bgImage='/images/auth-bg.jpeg' heading='Sign in' />
			<div className='wrapper_inner_page' style={{ marginTop: '20px' }}>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className='wrapper_buttons'>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button color='blue' clickHandler={() => setType('register')}>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
