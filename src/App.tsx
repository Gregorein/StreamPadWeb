import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Box } from "@mui/joy"
import Footer from "components/Footer"
import Header from "components/Header"

import Home from "views/Home"
import NotFound from "views/NotFound"

const App = () => (
  <Box
    component="main"
    sx={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      zIndex: 0,
    }}
  >
    <Router>
      <Header />

      <Routes>
        <Route index element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  </Box>
)

export default App
