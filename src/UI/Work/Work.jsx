import { useRef } from "react"
import { useInView } from "framer-motion"
import styles from "./Work.module.scss"

const Work = (props) => {
	const workRef = useRef(null)
	const isInView = useInView(workRef)

	return (
		<div
			className={styles.work__container}
			ref={workRef}
			style={{
				transform: isInView ? "none" : "translateY(50px) scale(1.1)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
			}}
		>
			<a href={props.href}>
				{/* <Link to=""> */}
				<div className={styles.card}>
					<div className={styles.card__bottom}>
						<span>{props.title}</span>
						<ul className={styles.info__tags}>
							{props?.tags?.map((tag, index) => {
								return <li key={index}>{tag}</li>
							})}
						</ul>
					</div>
					<span className={styles.card__explore}>
						<span></span>
					</span>
				</div>
				<img src={props.image} />
				{/* </Link> */}
			</a>
		</div>
	)
}

export default Work
