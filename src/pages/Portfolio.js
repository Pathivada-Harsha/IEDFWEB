"use client"
import "../component_css/Portfolio.css"
import { useState, useEffect } from "react"
import istl from "../images/Portfolio/istl.png"
import sesola from "../images/Portfolio/sesola.png"
import solaris from "../images/Portfolio/solaris.png"


const Portfolio = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    founderName: "",
    email: "",
    phone: "",
    sector: "",
    fundingStage: "",
    businessIdea: "",
    website: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const portfolioCompanies = [
    {
      id: 1,
      name: "IstlEnergy",
      sector: "Energy Infrastructure",
      description:
        "A leading energy infrastructure company with global presence, specializing in sustainable energy solutions and advanced power systems across multiple markets.",
      locations: ["India", "Dubai", "Singapore"],
      image: istl,
      website: "www.istlenergy.com",
      highlights: ["Global Operations", "Energy Infrastructure", "Sustainable Solutions", "Multi-Market Presence"],
    },
    {
      id: 2,
      name: "Sesola Energy",
      sector: "Solar Power",
      description:
        "Innovative solar power company focused on developing cutting-edge photovoltaic solutions and renewable energy systems for commercial and residential applications.",
      locations: ["India"],
      image: sesola,
      website: "www.sesolaenergy.com",
      highlights: ["Solar Innovation", "Renewable Energy", "Commercial Solutions", "Residential Systems"],
    },
    {
      id: 3,
      name: "Solaris",
      sector: "Solar Technology",
      description:
        "Advanced solar technology company developing next-generation solar panels and energy storage solutions with focus on efficiency and sustainability.",
      locations: ["India"],
      image: solaris,
      website: "www.solaries.com",
      highlights: ["Solar Panels", "Energy Storage", "High Efficiency", "Sustainable Tech"],
    },
  ]

  const investmentFocus = [
    {
      title: "Clean Energy",
      description: "Supporting companies developing sustainable energy solutions and renewable technologies",
      icon: "🌱",
      companies: "Multiple Portfolio Companies",
    },
    {
      title: "Global Expansion",
      description: "Backing businesses with international growth potential and multi-market strategies",
      icon: "🌍",
      companies: "International Presence",
    },
    {
      title: "Innovation Leadership",
      description: "Investing in companies at the forefront of technological advancement and market disruption",
      icon: "💡",
      companies: "Technology Leaders",
    },
    {
      title: "Sustainable Impact",
      description: "Focusing on businesses that create positive environmental and social impact",
      icon: "🎯",
      companies: "Impact-Driven Solutions",
    },
  ]

  const investmentSectors = [
    {
      id: 1,
      title: "Defence & Aerospace",
      description: "Advanced defense technologies, autonomous systems, and aerospace innovations",
      icon: "🛡️",
      color: "#1CA69A",
    },
    {
      id: 2,
      title: "Space Technology",
      description: "Satellite systems, space exploration, and next-generation propulsion",
      icon: "🚀",
      color: "#2E8B57",
    },
    {
      id: 3,
      title: "Clean Energy",
      description: "Solar, renewable energy solutions, and sustainable power systems",
      icon: "🌱",
      color: "#20B2AA",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      description: "Machine learning, computer vision, and automation technologies",
      icon: "🤖",
      color: "#3CB371",
    },
    {
      id: 5,
      title: "Electronics & Communication",
      description: "Advanced electronics, communication systems, and IoT solutions",
      icon: "📡",
      color: "#48D1CC",
    },
  ]

  const handleCompanyClick = (company) => {
    setSelectedCompany(company)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedCompany(null), 300)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your submission! We'll review your proposal and get back to you soon.")
    setFormData({
      companyName: "",
      founderName: "",
      email: "",
      phone: "",
      sector: "",
      fundingStage: "",
      businessIdea: "",
      website: "",
    })
  }

  return (
    <div className="Portfolio-portfolio">
      {/* Hero Section */}
      <section className="Portfolio-hero">
        <div className="Portfolio-hero-background">
          <div className="Portfolio-hero-overlay"></div>
        </div>
        <div className="Portfolio-hero-content">
          <div className="Portfolio-container">
            <div className="Portfolio-hero-badge">
              <span className="Portfolio-badge-text">Our Investment Portfolio</span>
            </div>
            <h1 className="Portfolio-hero-title">
              Empowering Innovation Through <span className="Portfolio-highlight">Strategic Partnerships</span>
            </h1>
            <p className="Portfolio-hero-subtitle">
              Discover our portfolio of innovative companies that are shaping the future of clean energy, technology,
              and sustainable solutions across global markets.
            </p>
            <div className="Portfolio-hero-stats">
              <div className="Portfolio-stat">
                <span className="Portfolio-stat-number">Multiple</span>
                <span className="Portfolio-stat-label">Portfolio Companies</span>
              </div>
              <div className="Portfolio-stat">
                <span className="Portfolio-stat-number">Global</span>
                <span className="Portfolio-stat-label">Market Presence</span>
              </div>
              <div className="Portfolio-stat">
                <span className="Portfolio-stat-number">Diverse</span>
                <span className="Portfolio-stat-label">Sectors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Sectors Section */}
      <section className="Portfolio-sectors" data-section="sectors">
        <div className="Portfolio-container">
          <div className="Portfolio-section-header Portfolio-center">
            <div className="Portfolio-section-badge">
              <span className="Portfolio-badge-dot"></span>
              INVESTMENT SECTORS
            </div>
            <h2 className="Portfolio-section-title">Where We Invest</h2>
            <p className="Portfolio-section-description">
              We focus on five key sectors that are driving the future of technology and sustainable innovation.
            </p>
          </div>
          <div className={`Portfolio-sectors-grid ${visibleSections.has("sectors") ? "Portfolio-animate-in" : ""}`}>
            {investmentSectors.map((sector, index) => (
              <div
                key={sector.id}
                className="Portfolio-sector-card"
                style={{
                  animationDelay: visibleSections.has("sectors") ? `${index * 0.1}s` : "0s",
                  borderTopColor: sector.color,
                }}
              >
                <div className="Portfolio-sector-icon" style={{ backgroundColor: sector.color }}>
                  {sector.icon}
                </div>
                <h3 className="Portfolio-sector-title">{sector.title}</h3>
                <p className="Portfolio-sector-description">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Companies Section - Updated */}
      <section className="Portfolio-companies" data-section="companies">
        <div className="Portfolio-container">
          <div className="Portfolio-section-header Portfolio-center">
            <div className="Portfolio-section-badge">
              <span className="Portfolio-badge-dot"></span>
              PORTFOLIO COMPANIES
            </div>
            <h2 className="Portfolio-section-title1">Discover Our Portfolio Companies</h2>
            <p className="Portfolio-section-description">
              We partner with visionary companies that are driving innovation and creating sustainable value across
              multiple sectors and geographies.
            </p>
          </div>
          <div
            className={`Portfolio-companies-logos-grid ${visibleSections.has("companies") ? "Portfolio-animate-in" : ""}`}
          >
            {portfolioCompanies.map((company, index) => (
              <div
                key={company.id}
                className="Portfolio-company-logo-card"
                style={{ animationDelay: visibleSections.has("companies") ? `${index * 0.2}s` : "0s" }}
                onClick={() => handleCompanyClick(company)}
              >
                <div className="Portfolio-company-logo-container">
                  <img src={company.image || "/placeholder.svg"} alt={company.name} />
                  <div className="Portfolio-logo-overlay">
                    <span className="Portfolio-view-details">View Details</span>
                  </div>
                </div>
                <h3 className="Portfolio-company-logo-name">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Modal */}
      {isModalOpen && selectedCompany && (
        <div className={`Portfolio-modal-overlay ${isModalOpen ? "Portfolio-modal-open" : ""}`} onClick={closeModal}>
          <div className="Portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="Portfolio-modal-close" onClick={closeModal}>
              <span>×</span>
            </button>

            <div className="Portfolio-modal-header">
              <div className="Portfolio-modal-logo">
                <img src={selectedCompany.image || "/placeholder.svg"} alt={selectedCompany.name} />
              </div>
              <div className="Portfolio-modal-title-section">
                <h2 className="Portfolio-modal-title">{selectedCompany.name}</h2>
                <span className="Portfolio-modal-sector">{selectedCompany.sector}</span>
                <div className="Portfolio-modal-locations">
                  {selectedCompany.locations.map((location, idx) => (
                    <span key={idx} className="Portfolio-modal-location-tag">
                      📍 {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="Portfolio-modal-body">
              <div className="Portfolio-modal-description">
                <h3>About the Company</h3>
                <p>{selectedCompany.description}</p>
              </div>

              <div className="Portfolio-modal-highlights">
                <h3>Key Highlights</h3>
                <div className="Portfolio-modal-highlights-grid">
                  {selectedCompany.highlights.map((highlight, idx) => (
                    <span key={idx} className="Portfolio-modal-highlight-tag">
                      ✨ {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="Portfolio-modal-footer">
                <div className="Portfolio-modal-website">
                  <span className="Portfolio-modal-website-label">Website:</span>
                  <a
                    href={`https://${selectedCompany.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Portfolio-modal-website-link"
                  >
                    {selectedCompany.website}
                  </a>
                </div>
                <a
                  href={`https://${selectedCompany.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Portfolio-modal-visit-btn"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Investment Focus Section */}
      <section className="Portfolio-focus" data-section="focus">
        <div className="Portfolio-container">
          <div className="Portfolio-section-header Portfolio-center">
            <div className="Portfolio-section-badge">
              <span className="Portfolio-badge-dot"></span>
              INVESTMENT FOCUS
            </div>
            <h2 className="Portfolio-section-title">Our Strategic Approach</h2>
            <p className="Portfolio-section-description">
              We focus on key areas that drive sustainable growth and create lasting value for our portfolio companies
              and stakeholders.
            </p>
          </div>
          <div className={`Portfolio-focus-grid ${visibleSections.has("focus") ? "Portfolio-animate-in" : ""}`}>
            {investmentFocus.map((focus, index) => (
              <div
                key={index}
                className="Portfolio-focus-card"
                style={{ animationDelay: visibleSections.has("focus") ? `${index * 0.15}s` : "0s" }}
              >
                <div className="Portfolio-focus-icon">{focus.icon}</div>
                <h3 className="Portfolio-focus-title">{focus.title}</h3>
                <p className="Portfolio-focus-description">{focus.description}</p>
                <div className="Portfolio-focus-companies">{focus.companies}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="Portfolio-contact" data-section="contact">
        <div className="Portfolio-container">
          <div className="Portfolio-contact-layout">
            <div className="Portfolio-contact-content">
              <div className="Portfolio-section-header">
                <div className="Portfolio-section-badge">
                  <span className="Portfolio-badge-dot"></span>
                  JOIN OUR PORTFOLIO
                </div>
                <h2 className="Portfolio-section-title">Share Your Vision</h2>
                <p className="Portfolio-section-description">
                  Are you building the next breakthrough in clean energy, technology, or sustainable solutions? We'd
                  love to hear about your innovative ideas and explore potential partnership opportunities.
                </p>
              </div>
              <div className="Portfolio-contact-info">
                <div className="Portfolio-contact-item">
                  <span className="Portfolio-contact-icon">💡</span>
                  <div>
                    <h4>Innovation Focus</h4>
                    <p>We invest in cutting-edge technologies and disruptive business models</p>
                  </div>
                </div>
                <div className="Portfolio-contact-item">
                  <span className="Portfolio-contact-icon">🌍</span>
                  <div>
                    <h4>Global Reach</h4>
                    <p>Supporting companies with international expansion potential</p>
                  </div>
                </div>
                <div className="Portfolio-contact-item">
                  <span className="Portfolio-contact-icon">🤝</span>
                  <div>
                    <h4>Strategic Partnership</h4>
                    <p>Beyond funding - we provide mentorship and strategic guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Portfolio-contact-form-container">
              <form className="Portfolio-contact-form" onSubmit={handleSubmit}>
                <div className="Portfolio-form-row">
                  <div className="Portfolio-form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="Portfolio-form-group">
                    <label htmlFor="founderName">Founder Name *</label>
                    <input
                      type="text"
                      id="founderName"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="Portfolio-form-row">
                  <div className="Portfolio-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="Portfolio-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="Portfolio-form-row">
                  <div className="Portfolio-form-group">
                    <label htmlFor="sector">Industry Sector *</label>
                    <select id="sector" name="sector" value={formData.sector} onChange={handleInputChange} required>
                      <option value="">Select Sector</option>
                      <option value="clean-energy">Clean Energy</option>
                      <option value="defence">Defence & Aerospace</option>
                      <option value="space">Space Technology</option>
                      <option value="ai">Artificial Intelligence</option>
                      <option value="electronics">Electronics & Communication</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="Portfolio-form-group">
                    <label htmlFor="fundingStage">Funding Stage</label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Stage</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B</option>
                      <option value="growth">Growth Stage</option>
                    </select>
                  </div>
                </div>
                <div className="Portfolio-form-group">
                  <label htmlFor="website">Company Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://www.yourcompany.com"
                  />
                </div>
                <div className="Portfolio-form-group">
                  <label htmlFor="businessIdea">Business Idea & Vision *</label>
                  <textarea
                    id="businessIdea"
                    name="businessIdea"
                    value={formData.businessIdea}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us about your business idea, market opportunity, and how you're creating value..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="Portfolio-submit-btn">
                  Submit Proposal
                  <span className="Portfolio-btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

