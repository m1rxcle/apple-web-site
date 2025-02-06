const CustomNextArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{
				...style,
				position: "absolute",
				cursor: "pointer",
				transition: "opacity 0.3s ease", // Add a smooth transition effect
			}}
			onClick={onClick}
		/>
	)
}

export default CustomNextArrow
