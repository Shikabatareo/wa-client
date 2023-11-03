import cn from 'clsx'
import { Controller } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import './NewExercise.module.scss'
import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'
import { useExercisePage } from './useExercisePage'
const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		error,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
		isSuccess,
		control
	} = useExercisePage()
	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpeg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className='wrapper_inner_page' style={{ marginTop: '20px' }}>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
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
					<Field
						error={error?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
						placeholder='Times'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{error?.iconPath && (
						<div className={styles.error}>{error?.iconPath?.message}</div>
					)}
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
