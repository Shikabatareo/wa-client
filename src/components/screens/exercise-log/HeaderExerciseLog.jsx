import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/exercise-bg.jpeg')`,
				height: 300
			}}
		>
			<Header
				backLink={
					isSuccess ? `/workout/${exerciseLog.workoutLogId}` : '/workouts'
				}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
						}
						height='54'
						alt=''
						style={{ marginBottom: 40 }}
						draggable={false}
					/>
					<h1 className={stylesLayout.heading} style={{ marginLeft: 90 }}>
						{exerciseLog.exercise.name}
					</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
