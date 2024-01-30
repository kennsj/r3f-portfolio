import styles from "./Header.module.scss"
import { useAnimation, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const Header = () => {
	const headingRef = useRef()

	useEffect(() => {
		if (headingRef.current) {
			gsap.set(headingRef.current, { visibility: "visible" })
			const text = new SplitType(headingRef.current)
			gsap.from(text.words, {
				yPercent: -150,
				stagger: {
					// from: "left",
					each: 0.04,
				},
				duration: 0.5,
				// opacity: 0,
				// scale: 0.5,
				ease: "ease-out",
			})
		}
	}, [headingRef])

	return (
		<>
			<header className={styles.home__header}>
				<div className={styles.intro}>
					<h2 className={styles.header__title}>Good morning!</h2>
					<h3 className={styles.header__subtitle}>
						I am Kenneth, a multidisciplinary designer and developer with a
						passion for thought-provoking concepts and products which focuses on
						user-engagements.
					</h3>
					{/* <h1>
						Kenneth <br />
						Jørgensen
					</h1> */}
				</div>
			</header>
			<section className={styles.intro__section}>
				<div className={styles["header-text__wrapper"]}>
					{/* <h2>
						<span className={styles.highlighted}>Multidisciplinary</span>{" "}
						designer & developer with a passion for creating exciting{" "}
						<span className={styles.highlighted}>concepts</span> &{" "}
						<span className={styles.highlighted}>products</span> which focuses
						on user-engagements.
					</h2> */}
				</div>
			</section>
		</>
	)
}

export default Header
