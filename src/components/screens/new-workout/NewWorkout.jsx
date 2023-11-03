import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import SelectExercises from './SelectExercises'
import { useWorkoutPage } from './useWorkoutPage'

const NewWorkout = () => {
	const {
		error,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
		isSuccess,
		control
	} = useWorkoutPage()
	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpeg'
				heading='Create new workout'
			/>
			<div className='wrapper_inner_page' style={{ marginTop: '20px' }}>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={error?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{error?.iconPath && <div>{error?.iconPath?.message}</div>}
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
