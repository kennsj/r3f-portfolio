import React from "react"
import styles from "./WorkList.module.scss"
import Work from "../Work/Work"

const workImages = [
	"./img/work-preview-sno.png",
	"./img/work-preview-cinema.png",
	"./img/work-preview-folkeeventyr.png",
]

const WorkList = (props) => {
	return (
		<main>
			<section className={styles.work__section}>
				<Work
					subtitle='VR / Experience'
					title='SNØ Oslo'
					image={workImages[0]}
				></Work>
				<Work subtitle='UX / UI' title='Cinema concept' image={workImages[1]} />
				<Work
					subtitle='UI / 3D'
					title='Norwegian Folklore'
					image={workImages[2]}
				/>
			</section>
		</main>
	)
}

export default WorkList
