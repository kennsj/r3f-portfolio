import { Scroll, ScrollControls } from "@react-three/drei"
import React from "react"
// import Workpage from "../Work/Workpage.module.scss"
import styles from "./Sno.module.scss"

const Sno = () => {
	return (
		<>
			<ScrollControls pages={2} damping={0.1}>
				<Scroll html>
					<header className={styles.work__header}>
						<h4>VR / Experience</h4>
						<h3 className={styles.highlighted}>SNØ Oslo</h3>
						<h1>
							Building an interactive portal for visitors to transcend through.
						</h1>
						<div className={styles.project__info}>
							<div className={styles.project__when}>
								<h4 className={styles.highlighted}>When</h4>
								<span>2016</span>
							</div>
							<div className={styles.project__who}>
								<h4 className={styles.highlighted}>By</h4>
								<span>Kenneth Jørgensen</span>
								<span>Robin Ingebrigtsen</span>
							</div>
							<div className={styles.project__tools}>
								<h4 className={styles.highlighted}>Tools</h4>
								<span>Concept</span>
								<span>Design</span>
								<span>VR Development</span>
								<span>2016</span>
							</div>
						</div>
					</header>
					<main className={styles.work__main}>
						<video loop={true} controls>
							<source src='./video/sno-vr.mp4' type='video/mp4' />
						</video>
					</main>
					<footer></footer>
				</Scroll>
			</ScrollControls>
		</>
	)
}

export default Sno
