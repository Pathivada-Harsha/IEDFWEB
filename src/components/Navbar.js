"use client"
import { useState, useRef, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, X, ArrowRight, Zap } from "lucide-react"
import "../component_css/Navbar.css"
import logo from "../images/logo8.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const navbarRef = useRef(null)
  const location = useLocation()

  // Sticky functionality for browsers that don't support CSS sticky
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const offset = navbarRef.current.offsetTop
        const isCurrentlySticky = window.pageYOffset > offset
        if (isCurrentlySticky !== isSticky) {
          setIsSticky(isCurrentlySticky)
        }
      }
    }

    // Check if browser supports sticky positioning
    const testElement = document.createElement("div")
    testElement.style.position = "sticky"
    const supportsSticky = testElement.style.position === "sticky"

    // Only add scroll listener if sticky is not supported
    if (!supportsSticky) {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check
    }

    return () => {
      if (!supportsSticky) {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [isSticky])

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "About", path: "/Aboutus" },
    { name: "Portfolio", path: "/Portfolio" },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const currentPath = location.pathname

  const isActive = (path) => {
    if (path === "/" && currentPath === "/") {
      return true
    }
    if (path !== "/" && currentPath.startsWith(path)) {
      return true
    }
    return currentPath === path
  }

  return (
    <>
      <nav ref={navbarRef} className={`modern-navbar ${isSticky ? "navbar-sticky-fallback" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <NavLink to="/" className="logo-link">
                <div className="logo-container">
                  {logo ? (
                    <img src={logo || "/placeholder.svg"} alt="Logo" className="logo-image" />
                  ) : (
                    <Zap className="logo-symbol" size={100} />
                  )}
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="navbar-menu-desktop">
              <div className="nav-links">
                {navItems.map((item) => (
                  <NavLink key={item.name} to={item.path} className={`nav-link ${isActive(item.path) ? "active" : ""}`}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Contact Us Button - Far Right */}
            <div className="contact-button-container">
              <NavLink to="/Contactus" className="contact-button">
                Contact Us
                <ArrowRight size={16} className="contact-arrow" />
              </NavLink>
            </div>

            {/* Mobile Menu Button - Far Right */}
            <div className="navbar-mobile-toggle">
              <button onClick={toggleMobileMenu} className="mobile-menu-button" aria-label="Toggle mobile menu">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`navbar-menu-mobile ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item.path) ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink to="/Contactus" className="mobile-contact-link" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
                <ArrowRight size={16} className="mobile-contact-arrow" />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
