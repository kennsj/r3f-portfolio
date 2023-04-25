import React from "react"
import styles from "./Work.module.scss"

const workImages = [
	"./img/work-preview-sno.png",
	"./img/work-preview-cinema.png",
	"./img/work-preview-folkeeventyr.png",
]

const Work = () => {
	return (
		<main>
			<section className={styles.work__section}>
				<div className={styles.work__container}>
					<img src={`${workImages[0]}`} />
				</div>
				<div className={styles.work__container}>
					<img src={`${workImages[1]}`} />
				</div>
				<div className={styles.work__container}>
					<img src={`${workImages[2]}`} />
				</div>
			</section>
		</main>
	)
}

export default Work
