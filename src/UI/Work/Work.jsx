import { useRef } from "react"
import { useInView } from "framer-motion"
import styles from "./Work.module.scss"

const Work = (props) => {
	const workRef = useRef(null)
	const isInView = useInView(workRef)

	return (
		<div
			href='#work'
			className={styles.work__container}
			ref={workRef}
			style={{
				transform: isInView ? "none" : "translateY(50px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
		>
			<a href={props.href}>
				{/* <Link to=""> */}
				<div className={styles.work__card}>
					<h4>{props.subtitle}</h4>
					<h3>{props.title}</h3>
					<div className={styles.work__info}>
						<p>{props.info}</p>
					</div>
					<span>Explore</span>
					<img src={props.image} />
				</div>
				{/* </Link> */}
			</a>
		</div>
	)
}

export default Work
