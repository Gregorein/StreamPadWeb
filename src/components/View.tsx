import { Box } from "@mui/joy"
import { ReactNode, useEffect } from "react"

type ViewProps = {
	title?: string
	children?: ReactNode
	sx?: object
}

const View = ({
	title,
	children,
	sx
}: ViewProps) => {
	useEffect(() => {
		if (title) {
			document.title = `StreamPad - open source stream controls | ${title}`
		}
	}, [title])

	return (
		<Box
			component="main"
			sx={{
				flex: 1,
				display: "flex",
				position: "relative",
				zIndex: -1,
				flexDirection: "column",
				...sx
			}}
		>
			{children}
		</Box>
	)
}

export default View
