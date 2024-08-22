export type BreakpointVariant = "mobile" | "tablet" | "laptop" | "desktop"

export type Breakpoints<T> = {
	[key in BreakpointVariant]?: T
}

export const breakpoints: Breakpoints<number> = {
	mobile: 0,
	tablet: 768,
	laptop: 1366,
	desktop: 1920,
}

const mq = (() => {
	const under: Breakpoints<string> = {}
	const over: Breakpoints<string> = {}

	for (const [breakpoint, value] of Object.entries(breakpoints)) {
		over[breakpoint as BreakpointVariant] = `@media (min-width: ${value}px)`
		under[breakpoint as BreakpointVariant] = `@media (max-width: ${value}px)`
	}

	return {
		over,
		under
	} as Record<"under" | "over", Record<BreakpointVariant, string>>
})()

export default mq
