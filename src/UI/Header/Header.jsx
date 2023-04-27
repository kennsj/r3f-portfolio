import Logo from "../../assets/logo/kj-logo.svg"
import styles from "./Header.module.scss"
import { SplitText } from "@cyriacbr/react-split-text"
import { useAnimation, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

const Header = () => {
	const headingVariants = {
		visible: { opacity: 1, transition: { duration: 1 } },
		hidden: { opacity: 0, y: "-100%" },
	}

	const headingRef = useRef(null)

	const controls = useAnimation()
	const isInView = useInView(headingRef)

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
				<motion.h1
					variants={headingVariants}
					className={styles.header__words}
					initial='hidden'
					animate={{ y: "0", opacity: 1 }}
					ref={headingRef}
				>
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
				</motion.h1>
			</div>
			<div className='test' style={{ height: "30dvh" }}></div>
		</header>
	)
}

export default Header
