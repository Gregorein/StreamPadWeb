import { Typography } from "@mui/joy";
import Background from "components/Background";
import View from "components/View";
import { Link } from "react-router-dom";

const NotFound = () => (
	<View>
		<Background wide />

		<Typography
			fontFamily="Roboto"
			fontWeight={100}
			fontSize={1000}
			sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				color: "black",
				opacity: 0.67,
				pointerEvents: "none",

				background: "red",
				lineHeight: 0
			}}
		>
			404
		</Typography>
		<Typography
			component={Link}
			to="/"
			fontSize={36}
			fontFamily="Roboto"
			fontWeight={400}
			sx={{
				textDecoration: "none",
				color: "white",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)"
			}}
		>
			lost?<br />
			return home
		</Typography>
	</View>
)

export default NotFound
