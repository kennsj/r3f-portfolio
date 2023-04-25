import Logo from "../../assets/logo/kj-pictogram_white.svg"
import styles from "./Header.module.scss"
import { SplitText } from "@cyriacbr/react-split-text"

const Header = () => {
	return (
		<header>
			<nav>
				<a href=''>
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

			<div className={styles["header-text__wrapper"]}>
				<h2>About me</h2>
				{/* <SplitText
						text={
							"I’m a multidisciplinary designer with a  passion for creating exciting concepts & products which focuses on engaging the users."
						}
						role={"Header"}
					/> */}
				<h1 className={styles.header__words}>
					<SplitText
						LineWrapper={({ lineIndex, children }) => (
							<span
								className='wrapper'
								style={{ animationDelay: lineIndex + "s" }}
							>
								{children}
							</span>
						)}
					>
						A multidisciplinary designer with a passion for creating exciting
						concepts & products which focuses user-engagements.
					</SplitText>
					{/* Continuously exploring & challenging myself to create memorable experiences. */}
				</h1>
			</div>
		</header>
	)
}

export default Header
