import { Box } from "@mui/joy";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => (
	<Box
		component="header"
		sx={{
			padding: 4,

			display: "flex",
			alignItems: "center",
			justifyContent: "space-between"
		}}
	>
		<Box component={Link} to="/" sx={{ cursor: "pointer" }}>
			<Logo size={48} color="white" />
		</Box>
	</Box>
)

export default Header
