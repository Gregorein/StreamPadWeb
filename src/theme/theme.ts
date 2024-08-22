import { extendTheme } from "@mui/joy/styles"
import { breakpoints } from "./mediaQueries"

declare module "@mui/joy/styles" {
	interface BreakpointOverrides {
		xs: false // removes the default breakpoints
		sm: false
		md: false
		lg: false
		xl: false
		mobile: true // adds the custom breakpoints
		tablet: true
		laptop: true
		desktop: true
	}
}

const extendedTheme = extendTheme({
	cssVarPrefix: "",
	spacing: 10,
	fontFamily: {
		display: "Roboto",
		body: "Roboto",
		code: "Fira Code"
	},
	breakpoints: {
		values: breakpoints as unknown as { mobile: number; tablet: number; laptop: number; desktop: number; } | undefined
	}
})

export default extendedTheme
