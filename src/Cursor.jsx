import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
	return (
		<>
			<AnimatedCursor
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={1.7}
				outerAlpha={0}
				hasBlendMode={true}
				outerStyle={{
					border: "2px solid #fff",
				}}
				innerStyle={{
					width: "5px",
					height: "5px",
					backgroundColor: "#fff",
				}}
			/>
		</>
	)
}

export default Cursor
