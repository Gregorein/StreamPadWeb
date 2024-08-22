import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Sheet } from "@mui/joy"

const App = () => (
  <Sheet
    component="main"
    sx={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Router>

      <Routes>
        <Route index element={"Home"} />
        {/* <Route index element={"Home"} /> */}

        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  </Sheet>
)

export default App
