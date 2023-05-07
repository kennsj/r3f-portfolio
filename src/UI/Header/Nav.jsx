import Logo from "../../assets/logo/kj-logo.svg"
import styles from "./Nav.module.scss"

const Nav = () => {
	return (
		<nav>
			<a href='/'>
				<img src={Logo} />
			</a>
			<div className={styles.menu}>
				<span>
					<a href='#'>About</a>
				</span>
				<span>
					<a href='#'>Work</a>
				</span>
				<span>
					<a href='#'>Contact</a>
				</span>
			</div>
		</nav>
	)
}

export default Nav
