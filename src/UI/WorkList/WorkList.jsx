import React from "react"
import styles from "./WorkList.module.scss"
import Work from "../Work/Work"

const workImages = [
	"./img/work-preview-sno.png",
	"./img/work-preview-cinema.png",
	"./img/work-preview-folkeeventyr.png",
	"./img/work-preview-sno-nobg.png",
	"./img/work-preview-cinema-nobg.png",
	"./img/work-preview-folkeeventyr-nobg.png",
	"./img/u4b-perspective.png",

	"./img/work-preview-snø_wide.jpg",
	"./img/work-preview-cinema_wide.jpg",
	"./img/work-preview-nfe_wide.jpg",
	"./img/work-preview-y4b_wide.jpg",
]

const WorkList = (props) => {
	return (
		<main>
			<section className={styles.work__section}>
				<Work
					href='./#'
					subtitle='VR / Concept'
					title='SNØ Oslo'
					info='A conceptual idea for SNØ Oslo using Unreal Engine to create a VR experience'
					image={workImages[7]}
				></Work>
				<Work
					href='./#'
					subtitle='UX / UI'
					title='Cinema concept'
					info='Hello'
					image={workImages[8]}
				/>
				<Work
					href='./#'
					subtitle='3D / UI'
					title='Norwegian Folklore'
					info='Building an interactive experience to retell old folklores on a modern, digital platform'
					image={workImages[9]}
				/>
				<Work
					href='./#'
					subtitle='UX / UI'
					title='Norwegian Folklore'
					info='Building an interactive experience to retell old folklores on a modern, digital platform'
					image={workImages[10]}
				/>
			</section>
		</main>
	)
}

export default WorkList
