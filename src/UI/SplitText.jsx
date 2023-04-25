import React from "react"

const SplitText = (props) => {
	// console.log(props)
	return (
		<span
		// aria-label={this.props.copy}
		// role={this.props.role}
		// role={this.props.role}
		// role={this.props.role}
		>
			{/* {console.log(props.copy)} */}
			{props.text.split("").map(function (char, index) {
				const style = {
					animationDelay: 0.5 + index / 100 + "s",
				}
				return (
					<span aria-hidden='true' key={index} style={style}>
						{char}
					</span>
				)
			})}
		</span>
	)
}

export default SplitText
