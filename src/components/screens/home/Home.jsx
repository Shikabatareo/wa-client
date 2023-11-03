import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Statistics from '../profile/statistics/Statistics'
import styles from './Home.module.scss'
function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.jpeg'>
			<div className={styles.content}>
				<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			</div>
			<h1>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
