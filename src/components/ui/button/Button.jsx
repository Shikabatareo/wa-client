import styles from './Button.module.scss'

const Button = ({ children, clickHandler = null, size = 'xl', color }) => {
	const buttonClasses = `${styles.button} ${
		color === 'blue' ? styles.button2 : styles.button1
	}`
	return (
		<div>
			<button className={buttonClasses} onClick={clickHandler}>
				{children}
			</button>
		</div>
	)
}

export default Button
