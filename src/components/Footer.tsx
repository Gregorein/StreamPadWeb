import { Box, Typography } from "@mui/joy"

const Footer = () => (
	<Box
		component="footer"
		sx={{
			padding: 2
		}}
	>
		<Typography fontFamily="Fira Code Variable" fontSize={14} fontWeight="bold" sx={{ color: "black" }}>
			Open-source under GPL-3.0. <Box component="a" sx={{ color: "inherit", textDecoration: "none" }} href="https://x.com/gregorein" target="_blank" rel="noopener noreferrer">Built with 🖤 by Gregorein</Box>
		</Typography>
	</Box>
)

export default Footer
