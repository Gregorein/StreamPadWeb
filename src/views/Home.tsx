import { Box, Typography } from "@mui/joy"
import { SxProps } from "@mui/joy/styles/types"
import Background from "components/Background"
import View from "components/View"

import { transition } from "utils/transition"
import useMediaQuery from "utils/useMediaQuery"

const Home = () => {
	const { over } = useMediaQuery()

	const headerStyle: SxProps = {
		fontSize: over.tablet ? 96 : 72,
		fontWeight: 50,
		color: "white",

		textAlign: over.laptop ? "right" : "center",
	}

	const textStyle: SxProps = {
		fontSize: over.tablet ? 24 : 21,
		fontWeight: 400,
		color: "white",

		textAlign: over.laptop ? "right" : "center",
	}

	const linkStyle: SxProps = {
		color: "black",
		textDecoration: "none",
	}

	const codeStyle: SxProps = {
		fontFamily: "Fira Code",
		fontSize: over.tablet ? 24 : 16,

		color: "white",
		mixBlendMode: "overlay",

		position: "relative",

		left: over.laptop ? "50vw" : "0vw",
		textAlign: over.laptop ? "left" : "center",
	}

	return (
		<View sx={{
			p: 3
		}}>
			<Background />
			<Box
				sx={{
					display: "flex",
					flex: 1,

					gap: over.tablet ? 1 : 2,

					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",

					"&::before": {
						transition: transition("filter"),

						content: "''",
						position: "absolute",
						inset: 0,
						zIndex: -1,

						backgroundImage: `url(/splash.png)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",

						mixBlendMode: "overlay",
						opacity: 0.5,
					},

					"&:hover::before": {
						filter: "blur(10px)",
					},

					"& > *": {
						width: over.laptop ? "50%" : "100%"
					}
				}}
			>


				<Typography sx={codeStyle}>$ streamPad --status</Typography>
				<Typography level="h1" sx={headerStyle}>
					StreamPad is
					<br />
					coming soon!
				</Typography>

				<Typography sx={codeStyle}>$ streamPad --info</Typography>
				<Typography level="body-md" sx={textStyle}>
					Stream controls for streamers, built by streamers,
					<br />
					open-source & customizable.
				</Typography>

				<Typography sx={codeStyle}>$ streamPad --contact</Typography>
				<Typography level="body-md" sx={textStyle}>
					stay in the loop:
				</Typography>
				<Typography level="body-md" sx={textStyle}>
					GitHub: <Box component="a" href="https://github.com/gregorein/streampad" target="_blank" rel="noopener noreferrer" sx={linkStyle}>StreamPad</Box> | <Box component="a" href="https://github.com/gregorein/streampadcore" target="_blank" rel="noopener noreferrer" sx={linkStyle}>Core</Box> | <Box component="a" href="https://github.com/gregorein/streampadweb" target="_blank" rel="noopener noreferrer" sx={linkStyle}>Web</Box><br />
					Twitter: <Box component="a" href="https://x.com/Gregorein" target="_blank" rel="noopener noreferrer" sx={linkStyle}>@Gregorein</Box>
				</Typography>

				<Typography level="body-md" sx={textStyle}>
					Power up your streaming game.
				</Typography>
			</Box>
		</View>
	)
}

export default Home
