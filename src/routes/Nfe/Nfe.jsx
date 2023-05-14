import { Scroll, ScrollControls } from "@react-three/drei"
import React from "react"
import styles from "./Nfe.module.scss"
// import Workpage from "../Work/Workpage.module.scss"

const Nfe = (props) => {
	return (
		<>
			<ScrollControls pages={2} damping={0.1}>
				<Scroll html>
					<header className={styles.work__header}>
						<h4>UX / UI</h4>
						<h1 className={styles.highlighted}>Norwegian Folklore</h1>
						<p>
							Building an interactive experience to retell old folklores on a
							modern, digital platform
						</p>
						<div className={styles.project__info}>
							<div className={styles.project__when}>
								<h4 className={styles.highlighted}>When</h4>
								<span>2019</span>
							</div>
							<div className={styles.project__who}>
								<h4 className={styles.highlighted}>By</h4>
								<span>Kenneth Jørgensen</span>
							</div>
							<div className={styles.project__tools}>
								<h4 className={styles.highlighted}>Tools</h4>
								<span>UX</span>
								<span>UI</span>
							</div>
						</div>
					</header>
					<main className={styles.work__main}>
						<img src='./img/work-preview-folkeeventyr.png' alt='' />
					</main>
					<footer></footer>
				</Scroll>
			</ScrollControls>
		</>
	)
}

export default Nfe
