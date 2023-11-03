import cn from 'clsx'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/profile-bg.jpeg')`,
				height: 356,
				borderBottomLeftRadius: 15,
				borderBottomRightRadius: 15
			}}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div className={stylesLayout.heading}>
					<time style={{ fontSize: 30, marginBottom: 55 }}>
						{workoutLog.minute + 'min.'}
					</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
