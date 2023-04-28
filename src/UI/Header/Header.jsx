import styles from "./Header.module.scss"
import { SplitText } from "@cyriacbr/react-split-text"
import { useAnimation, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import SplitType from "split-type"
import gsap from "gsap"

console.log(gsap)

const Header = () => {
	// const headingVariants = {
	// 	visible: { opacity: 1, transition: { duration: 1 } },
	// 	hidden: { opacity: 0, y: "-100%" },
	// }

	// const headingRef = useRef(null)

	// const controls = useAnimation()
	// const isInView = useInView(headingRef)

	// const splitText = new SplitType(text)

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
			<header>
				<div className={styles.intro}>
					<h1>
						Kenneth <br />
						Jørgensen
					</h1>
				</div>
			</header>
			<section className={styles.intro__section}>
				<div className={styles["header-text__wrapper"]}>
					<h2>About me</h2>
					{/* <SplitText
						text={
							"I’m a multidisciplinary designer with a  passion for creating exciting concepts & products which focuses on engaging the users."
						}
						role={"Header"}
					/> */}
					<h1 ref={headingRef}>
						A multidisciplinary designer with a passion for creating exciting
						concepts & products which focuses user-engagements.
					</h1>
					{/* <h1>
						{text.split("\n").map((i, key) => {
							return <span key={key}>{i}</span>
						})}
					</h1> */}
					{/* <motion.h1
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
					</motion.h1> */}
				</div>
			</section>
		</>
	)
}

export default Header
