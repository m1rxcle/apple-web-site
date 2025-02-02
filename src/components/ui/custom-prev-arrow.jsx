const CustomPrevArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{
				...style,
				position: "absolute",
				transition: "opacity 0.3s ease", // Add a smooth transition effect
				zIndex: 20,
			}}
			onClick={onClick}
		/>
	)
}

export default CustomPrevArrow
