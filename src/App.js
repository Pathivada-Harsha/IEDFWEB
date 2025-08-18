import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.js"
import Footer from "./components/Footer.js"
import BackToTop from "./components/BackToTop.js"
import ScrollToTop from "./components/ScrollToTop.js"
import "./component_css/iNV_SECTORS_ALLCSS.CSS"
// import Aboutus from "./pages/AboutUs.js"
// import Footer from "./components/Footer"
// import "./App.css"
// import ScrollToTop from "./components/ScrollToTop.js"
// import BackToTop from "./components/BackToTop.js"
// import "./components_css/backToTop.css"

// Lazy loaded components
const Aboutus = React.lazy(() => import("./pages/AboutUs"))
const Portfolio = React.lazy(() => import("./pages/Portfolio"))
const Contactus = React.lazy(() => import("./pages/ContactUs"))
const Ai = React.lazy(() => import("./pages/Ai.js"))
const DefenceAero = React.lazy(() => import("./pages/DefenceAero.js"))

const Energy = React.lazy(() => import("./pages/Energy.js"))
const Space = React.lazy(() => import("./pages/Space.js"))
const Electronics = React.lazy(() => import("./pages/Electronics.js"))




function App() {
  return (
    // basename="/iedf"
    <Router >
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Ai" element={<Ai />} />
          <Route path="/DefenceAero" element={<DefenceAero />} />
          <Route path="/Energy" element={<Energy />} />
          <Route path="/Space" element={<Space />} />
          <Route path="/Electronics" element={<Electronics />} />
          {/* Add a catch-all route for debugging */}
          <Route
            path="*"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h2>Page Not Found</h2>
                <p>The requested page could not be found.</p>
              </div>
            }
          />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App
