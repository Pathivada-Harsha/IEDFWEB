"use client"

import { NavLink } from "react-router-dom"
import "../component_css/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: "About Us", href: "/AboutUs" },
      { name: "Our Team", href: "#team" },
      { name: "Investment Philosophy", href: "#philosophy" },
      { name: "Careers", href: "#careers" },
    ],
    services: [
      { name: "IEDF Fund", href: "#iedf" },
      { name: "Portfolio Management", href: "#portfolio" },
      { name: "Mentorship & Advisory", href: "#mentorship" },
      { name: "Investment Process", href: "#process" },
    ],
    sectors: [
      { name: "Defence & Aerospace", href: "/DefenceAero" },
      { name: "Space Technology", href: "/Space" },
      { name: "Clean Energy", href: "/Energy" },
      { name: "Artificial Intelligence", href: "/Ai" },
      { name: "Electronics & Communication", href: "/Electronics" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Regulatory Compliance", href: "#compliance" },
      { name: "Investor Relations", href: "#investor-relations" },
    ],
  }

  const contactInfo = {
    address: "Prakriya Venture Technologies LLP\nBangalore, Karnataka, India",
    email: "info@prakriyaventures.com",
    phone: "+91 80 1234 5678",
  }

  // Helper function to determine if link should use NavLink or regular anchor
  const renderLink = (link) => {
    // Use NavLink for internal routes (those that start with "/" and don't start with "#")
    if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
      return (
        <NavLink 
          to={link.href} 
          className="Footer-link"
          end
        >
          {link.name}
        </NavLink>
      )
    }
    // Use regular anchor tag for hash links and external links
    return (
      <a href={link.href} className="Footer-link">
        {link.name}
      </a>
    )
  }

  return (
    <footer className="Footer-footer">
      <div className="Footer-container">
        {/* Main Footer Content */}
        <div className="Footer-main">
          {/* Company Info Section */}
          <div className="Footer-company-section">
            <div className="Footer-logo">
              <h3 className="Footer-logo-text">Prakriya Ventures</h3>
              <p className="Footer-tagline">Thrust for your business</p>
            </div>
            <p className="Footer-company-description">
              India Electronic Development Fund (IEDF) - A SEBI registered Category 1 Alternative Investment Fund
              focused on deeptech innovations across defence, space, clean energy, and AI sectors.
            </p>
            <div className="Footer-sebi-badge">
              <span className="Footer-sebi-text">SEBI Registered</span>
              <span className="Footer-sebi-number">IN/AIF1/16-17/0305</span>
            </div>
          </div>

          {/* Links Sections */}
          <div className="Footer-links-grid">
            <div className="Footer-links-column">
              <h4 className="Footer-column-title">Company</h4>
              <ul className="Footer-links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Footer-links-column">
              <h4 className="Footer-column-title">Services</h4>
              <ul className="Footer-links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Footer-links-column">
              <h4 className="Footer-column-title">Investment Sectors</h4>
              <ul className="Footer-links-list">
                {footerLinks.sectors.map((link, index) => (
                  <li key={index}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Footer-links-column">
              <h4 className="Footer-column-title">Legal & Compliance</h4>
              <ul className="Footer-links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="Footer-contact-section">
            <h4 className="Footer-column-title">Contact Us</h4>
            <div className="Footer-contact-info">
              <div className="Footer-contact-item">
                <span className="Footer-contact-icon">📍</span>
                <p className="Footer-contact-text">{contactInfo.address}</p>
              </div>
              <div className="Footer-contact-item">
                <span className="Footer-contact-icon">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="Footer-contact-link">
                  {contactInfo.email}
                </a>
              </div>
              <div className="Footer-contact-item">
                <span className="Footer-contact-icon">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="Footer-contact-link">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="Footer-bottom">
          <div className="Footer-bottom-content">
            <p className="Footer-copyright">© {currentYear} Prakriya Venture Technologies LLP. All rights reserved.</p>
            <div className="Footer-bottom-links">
              <span className="Footer-fund-info">IEDF - INR 200 Crores Fund</span>
              <span className="Footer-separator">•</span>
              <span className="Footer-fund-info">Category 1 AIF</span>
              <span className="Footer-separator">•</span>
              <span className="Footer-fund-info">SEBI Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer