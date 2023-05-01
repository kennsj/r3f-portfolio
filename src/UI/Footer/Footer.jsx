import React from "react"
import styles from "./Footer.module.scss"

const socialIcons = [
	"./img/icons/fb.png",
	"./img/icons/ig.png",
	"./img/icons/linkedin.png",
	"./img/icons/spotify.png",
	"./img/icons/mail.png",
	"./img/icons/sound.png",
]

const Footer = () => {
	return (
		<footer style={styles.footer}>
			<div className={styles.social}>
				{/* <span>
					<a href='#'>
						<img src={socialIcons[0]} alt='social facebook page' />
					</a>
				</span> */}
				{/* <span>
					<a href='#'>
						<img src={socialIcons[1]} alt='social instagram page' />
					</a>
				</span> */}
				<span>
					<a href='#'>
						<img src={socialIcons[2]} alt='social linkedin page' />
					</a>
				</span>
				<span>
					<a href='https://open.spotify.com/user/eqlipze?si=af0dc9658fc44a55'>
						<img src={socialIcons[3]} alt='social spotify page' />
					</a>
				</span>
				<span>
					<a href='mailto:kennethsjorgensen@gmail.com'>
						<img src={socialIcons[4]} alt='mail' />
					</a>
				</span>
			</div>
			{/* <div className={styles.music__toggle}>Music OFF</div> */}
			<div className={styles.music__toggle}>
				<img
					className={styles.sound}
					src={socialIcons[5]}
					alt='social spotify page'
				/>
			</div>
		</footer>
	)
}

export default Footer
