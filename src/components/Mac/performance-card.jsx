const PerformanceCard = ({ howFaster, text }) => {
	return (
		<div className="flex flex-col items-start md:w-[230px] w-full gap-2">
			<div className="md:w-[230px] w-full bg-gradient-to-r from-blue via-purple-600 to-pink-600 h-[1px] text-black pointer-events-none mb-5">1</div>
			<h2 className="md:text-xl text-base">MacBook Pro with M4 is up to</h2>
			<h1 className="md:text-5xl text-4xl text-white">{howFaster}</h1>
			<h2 className="text-xl">{text}</h2>
		</div>
	)
}
export default PerformanceCard
