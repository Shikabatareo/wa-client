import Layout from '../../../layout/Layout'
import Loader from '../../../ui/Loader'
import Alert from '../../../ui/alert/Alert'
import styles from '../detail/Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'
const ListWorkouts = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkouts()
	return (
		<>
			<Layout bgImage='images/list-workout-bg.jpeg' heading='Workout list' />

			<div
				className='wrapper_inner_page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}
				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
