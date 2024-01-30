import React from "react"
import styles from "./About.module.scss"
import { useInView } from "react-intersection-observer"

const About = () => {
	const { ref, inView } = useInView({ triggerOnce: true })

	return (
		<section className={styles.about__section} ref={ref}>
			{/* {(inView = html.style.mixBlend)} */}
			<h4>SERVICES</h4>
			<div className={styles.about__list}>
				<h2>
					Concept <br /> development
				</h2>
				<p>
					Concept development helps you evaluate your customers' reactions to
					your product or service before your product launch. It is a structured
					way to develop an idea and to see if customers like your idea.
				</p>
			</div>
			<div className={styles.about__list}>
				<h2>
					Branding & <br /> identity
				</h2>
				<p>
					Consistent marketing and messaging lead to consistent brand identity
					and, therefore, consistent sales.
				</p>
			</div>
			<div className={styles.about__list}>
				<h2>UI / UX</h2>
				<p>
					As a web designer, I am responsible for big-picture decisions, like
					the menus listed on the site, and smaller details, like which fonts,
					colours, and graphics to use.
				</p>
			</div>
			<div className={styles.about__list}>
				<h2>Web development</h2>
				<p>
					As a web developer, I am responsible for big-picture decisions, like
					the menus listed on the site, and smaller details.
				</p>
			</div>
		</section>
	)
}

export default About
