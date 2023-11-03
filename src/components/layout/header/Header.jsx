import { AiOutlineUser } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()
	return (
		<h3 className={styles['header-container']}>
			{isAuth && (
				<>
					{pathname !== '/' ? (
						<button
							aria-label='Go to profile'
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
							className={styles['icons']}
						>
							<FiArrowLeft />
						</button>
					) : (
						<button
							onClick={() => {
								navigate('/profile')
							}}
							className={styles['icons']}
						>
							<AiOutlineUser />
						</button>
					)}

					{isAuth && <Hamburger />}
				</>
			)}
		</h3>
	)
}
export default Header
