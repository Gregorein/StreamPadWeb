import { Box } from "@mui/joy"

type BackgroundProps = {
	wide?: boolean
}

const Background = ({ wide }: BackgroundProps) => (
	<Box
		sx={{
			position: "fixed",
			overflow: "hidden",
			inset: 0,
			zIndex: -1,

			pointerEvents: "none"
		}}
	>
		{!wide
			? (
				<>
					<Box
						sx={{
							width: "95vw",
							height: "110vh",

							position: "absolute",
							top: "10vh",
							left: "-10vw",

							borderRadius: "50%",
							background: "linear-gradient(to bottom, #311A07, #FF0069)",

							filter: "blur(100px)",
						}}
					/>

					<Box
						sx={{
							width: "150vw",
							height: "75vh",

							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-67.75%, 25%) rotate(-30deg)",

							borderRadius: "35vh",
							background: "linear-gradient(to left, #DE591EFF 0%, transparent 50%)",
							mixBlendMode: "screen",

							filter: "blur(100px)",
						}}
					/>

					<Box
						sx={{
							width: "80vw",
							height: "120vh",

							position: "absolute",
							top: "87.5%",
							left: "40%",
							transform: "translate(-50%, -50%) rotate(35deg)",

							borderRadius: "50vh",
							background: "linear-gradient(to bottom, #DE591EFF 0%, transparent 50%)",
							mixBlendMode: "color-dodge",

							filter: "blur(100px)",
						}}
					/>
				</>
			) : (
				<>
					<Box
						sx={{
							content: "''",
							width: "105vw",
							height: "105vh",

							position: "absolute",
							top: "10vh",
							left: "-25vw",

							borderRadius: "50%",
							background: "linear-gradient(to bottom, #311A07, #FF0069)",

							filter: "blur(100px)",
						}}
					/>

					<Box
						sx={{
							width: "150vw",
							height: "50vh",

							position: "absolute",
							top: "80%",
							left: "20%",
							transform: "translate(-50%, -50%) rotate(-30deg)",

							borderRadius: "25vh",
							background: "linear-gradient(to left, #DE591EFF 0%, transparent 50%)",
							mixBlendMode: "screen",

							filter: "blur(75px)",
						}}
					/>

					<Box
						sx={{
							width: "100vw",
							height: "100vh",

							position: "absolute",
							top: "80%",
							left: "60%",
							transform: "translate(-50%, -50%) rotate(35deg)",

							borderRadius: "50vh",
							background: "linear-gradient(to right, #EE88144F, #E32B2B2D)",
							mixBlendMode: "color-dodge",

							filter: "blur(100px)",
						}}
					/>
				</>
			)}
	</Box>
)

export default Background
