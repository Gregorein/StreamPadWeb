import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import { CssVarsProvider } from "@mui/joy"

import "normalize-css"

import "./index.css"

import "@fontsource/roboto/100.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"

import "@fontsource-variable/fira-code"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider defaultMode="dark">
      <App />
    </CssVarsProvider>
  </StrictMode>,
)
