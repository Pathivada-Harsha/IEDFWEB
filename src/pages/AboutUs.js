"use client"

import "../component_css/AboutUs.css"
import { useState, useEffect, useRef } from "react"
import about1 from "../images/AboutUs/aboutus1.png"
import about2 from "../images/AboutUs/aboutus2.png"
import about3 from "../images/AboutUs/aboutus3.png"
import about4 from "../images/AboutUs/aboutus9.png"
import about5 from "../images/AboutUs/aboutus8.png"
import Leadership from "../components/leadership.js"

const AboutUs = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const funnelSectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]))
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Enhanced mouse tracking for funnel section
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (funnelSectionRef.current) {
        const rect = funnelSectionRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 50, y: 50 }) // Reset to center
    }

    const funnelSection = funnelSectionRef.current
    if (funnelSection) {
      funnelSection.addEventListener('mousemove', handleMouseMove)
      funnelSection.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (funnelSection) {
        funnelSection.removeEventListener('mousemove', handleMouseMove)
        funnelSection.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Apply dynamic background position based on mouse movement
  useEffect(() => {
    if (funnelSectionRef.current && visibleSections.has("funnel")) {
      const section = funnelSectionRef.current
      const offsetX = (mousePosition.x - 50) * 0.5 // Subtle parallax effect
      const offsetY = (mousePosition.y - 50) * 0.5

      section.style.setProperty('--mouse-x', `${offsetX}px`)
      section.style.setProperty('--mouse-y', `${offsetY}px`)
    }
  }, [mousePosition, visibleSections])

  const teamMembers = [
    
    {
      name: "Ravitheja K",
      position: "Partner",
      experience: "24+ years of experience",
      description:
        "Seasoned Business Development professional in IT and Manufacturing sectors. Specializes in Strategic Alignment of partnerships, M&A, Large Account Management and Supply chain.",
      image: "/placeholder.svg?height=300&width=300&text=Ravitheja+K",
    },
    {
      name: "S Bhanuchandran",
      position: "Partner",
      experience: "3 decades of experience",
      description:
        "Expertise in business strategies and fund raising. Advisory roles for many client companies. Leads Business Strategies and ensures portfolio companies adopt best strategies for fund raising.",
      image: "/placeholder.svg?height=300&width=300&text=S+Bhanuchandran",
    },
    {
      name: "Arun Kumar",
      position: "Compliance Officer",
      experience: "18+ years of experience",
      description:
        "Serial Entrepreneur in IT and Energy sectors. Specializes in overall management, setting strategic goals, financial performance, compliance and identifying new business opportunities.",
      image: "/placeholder.svg?height=300&width=300&text=Arun+Kumar",
    },
  ]

  const funnelSteps = [
    {
      count: "100+",
      title: "Startups/SME",
      description: "Broad outreach & inbound leads",
      color: "#1CA69A",
    },
    {
      count: "30-50",
      title: "Startups/SME",
      description: "Initial meetings, founder calls, basic due diligence",
      color: "#2E8B57",
    },
    {
      count: "5-10",
      title: "Startups/SME",
      description: "Deep due diligence, financial analysis, customer validation",
      color: "#20B2AA",
    },
    {
      count: "1-2",
      title: "Startups/SME",
      description: "Term sheet negotiation & investment decision",
      color: "#3CB371",
    },
  ]

  return (
    <div className="About-about-us">
      {/* Hero Section */}
      <section className="About-hero">
        <div className="About-hero-background">
          <img src={about5} alt="About Us Background" className="About-hero-bg-image" />
          <div className="About-hero-overlay"></div>
        </div>
        <div className="About-hero-content">
          <div className="About-container">
            <h1 className="About-hero-title">About Us</h1>
            <p className="About-hero-subtitle">
              Prakriya Venture Technologies LLP - Driving Innovation Through Strategic Investments
            </p>
            <div className="About-hero-badge">
              <span className="About-badge-text">SEBI Registered Category 1 AIF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modernized Scope Section */}
      <section className="About-scope" data-section="scope">
        <div className="About-container">
          <div className="About-scope-layout">
            <div className="About-scope-content">
              <div className="About-section-header">
                <div className="About-scope-badge">
                  <span className="About-badge-dot"></span>
                  OUR COMPREHENSIVE APPROACH
                </div>
                <h2 className="About-section-title">Scope of Prakriya Venture Technologies</h2>
                <p className="About-section-description">
                  End-to-end fund management services covering the complete investment lifecycle from fund inception to successful exits.
                </p>
              </div>

              {/* Mission & Vision Section */}
              <div className="About-mission-vision-container">
                <div className="About-mission-vision-item">
                  <div className="About-mv-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" fill="#1CA69A"/>
                      <path d="M12 1v6m0 8v6m11-7h-6m-8 0H1m15.5-6.5l-4.24 4.24m-5.66 0L2.5 6.5m16 11l-4.24-4.24m-5.66 0L2.5 17.5" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="About-mv-content">
                    <h3 className="About-mv-title">Our Vision</h3>
                    <p className="About-mv-description">
                      To be a world class Startup/SME ecosystem in disruptive technologies and deeptech innovations
                    </p>
                  </div>
                </div>
                <div className="About-mission-vision-item">
                  <div className="About-mv-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#1CA69A"/>
                      <path d="M19 11L20.18 15.18L24 16.35L20.18 17.52L19 22L17.82 17.52L14 16.35L17.82 15.18L19 11Z" fill="#2E8B57"/>
                      <path d="M5 11L6.18 15.18L10 16.35L6.18 17.52L5 22L3.82 17.52L0 16.35L3.82 15.18L5 11Z" fill="#20B2AA"/>
                    </svg>
                  </div>
                  <div className="About-mv-content">
                    <h3 className="About-mv-title">Our Mission</h3>
                    <p className="About-mv-description">To mentor and fund deeptech startups/SMEs in defence, aerospace, electronics systems, and clean energy — nurturing 10–15 ventures in 2 years with a goal of propelling at least 2 to unicorn status.</p>
                    {/* <ul className="About-mv-list">
                      <li>To mentor, guide, nurture and fund Startups/SME in deeptech areas.</li>
                      <li>To create sustainable startups in defence, aerospace, Electronics Systems and clean energy sectors.</li>
                      <li>To support 10-15 startups/SME in the next 2 years and propel at least 2 of them into unicorns</li>
                    </ul> */}
                  </div>
                </div>

                
              </div>
            </div>

            <div className="About-scope-visual">
              <div className={`About-scope-image-container ${visibleSections.has("scope") ? "About-animate-in" : ""}`}>
                <img
                  src={about1}
                  alt="IEDF Fund Management Scope"
                  className="About-scope-diagram"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <Leadership />
      </section>

      {/* Enhanced Funnel Approach Section */}
      <section
        className="About-funnel"
        data-section="funnel"
        ref={funnelSectionRef}
        style={{
          '--mouse-x': '0px',
          '--mouse-y': '0px'
        }}
      >
        <div className="About-container">
          <div className="About-funnel-layout">
            <div className="About-funnel-content">
              <div className="About-section-header">
                <div className="About-funnel-badge">
                  <span className="About-badge-dot"></span>
                  OUR SYSTEMATIC APPROACH
                </div>
                <h2 className="About-section-title">Our Funnel Approach</h2>
                <p className="About-section-description">
                  A systematic screening process that ensures we identify and invest in the most promising startups and
                  SMEs with high growth potential through rigorous evaluation stages.
                </p>
              </div>
            </div>

            <div className="About-funnel-visual">
              <div
                className={`About-funnel-image-container ${visibleSections.has("funnel") ? "About-animate-in" : ""}`}
              >
                <img
                  src={about4}
                  alt="Investment Funnel Process"
                  className="About-funnel-diagram"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs