import { useRef } from "react"
import styles from "./Work.module.scss"
import { useInView } from "framer-motion"

const Work = (props) => {
	const workRef = useRef(null)
	const isInView = useInView(workRef)

	return (
		<div
			className={styles.work__container}
			ref={workRef}
			style={{
				transform: isInView ? "none" : "translateY(50px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
		>
			<a href='#'>
				<div className={styles.work__information}>
					<h4>{props.subtitle}</h4>
					<h3>{props.title}</h3>
				</div>
				<img src={props.image} />
				{/* {children} */}
			</a>
		</div>
	)
}

export default Work
