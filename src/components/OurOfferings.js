"use client"

import { useEffect, useRef, useState } from "react"
import "../component_css/OurOfferings.css"
import Offering1 from "../images/Home_hero/offering1.png"
import Offering2 from "../images/Home_hero/offering2.png"
import Offering3 from "../images/Home_hero/offering3.png"
import Offering4 from "../images/Home_hero/offerings4.png"



const OurOfferings = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    grid: false,
  })
  
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            
            if (target === headerRef.current && !isVisible.header) {
              setIsVisible(prev => ({ ...prev, header: true }))
              target.classList.add('animate')
            }
            
            if (target === gridRef.current && !isVisible.grid) {
              setIsVisible(prev => ({ ...prev, grid: true }))
              target.classList.add('animate')
              
              // Animate individual cards with staggered delay
              const cards = target.querySelectorAll('.Offering-card')
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate')
                }, index * 200) // 200ms delay between each card
              })
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (gridRef.current) observer.observe(gridRef.current)

    return () => observer.disconnect()
  }, [isVisible])

  const offerings = [
    {
      id: 1,
      title: "India Electronic Development Fund (IEDF)",
      description:
        "SEBI registered Category 1 Alternative Investment Fund with INR 200 Crores corpus + INR 50 Crores Green Shoe option. Focused on deeptech startups in defence, aerospace, space tech, clean energy, and AI with 7+2 years fund life targeting 25% returns.",
      image: Offering3,
    },
    {
      id: 2,
      title: "Deeptech Investment Strategy",
      description:
        "Strategic investments in 10-15 high-potential startups across defence & aerospace, space technology, next-gen electronics, AI, and clean energy solutions. 90% fund allocation for value creation with comprehensive due diligence and risk management.",
      image: Offering2,
    },
    {
      id: 3,
      title: "End-to-End Fund Management",
      description:
        "Complete fund lifecycle management including deal sourcing, investment decisions, portfolio monitoring, regulatory compliance, and strategic exit planning. Leveraging 3+ decades of expertise in business strategies and fund management.",
      image: Offering4,
    },
  ]

  return (
    <div className="Offering-our-offerings">
      {/* Background Section - Only covers top portion */}
      <div className="Offering-background-section"></div>

      <div className="Offering-container">
        {/* Header Section */}
        <div className="Offering-header" ref={headerRef}>
          <div className="Offering-header-badge">
            <span className="Offering-badge-arrows">››</span>
            <span className="Offering-badge-text">Our Offerings</span>
            <span className="Offering-badge-arrows">‹‹</span>
          </div>
          <h2 className="Offering-title">India Electronic Development Fund Services</h2>
          <p className="Offering-description">
            Prakriya Venture Technologies LLP manages the India Electronic Development Fund (IEDF), a{" "}
            <strong>SEBI registered Category 1 Alternative Investment Fund</strong> focused on deeptech innovations. 
            We mentor, guide, nurture and fund startups/SMEs in defence, aerospace, space technology, clean energy, 
            and AI sectors with a vision to create world-class startup ecosystems and propel unicorns in disruptive technologies.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="Offering-grid" ref={gridRef}>
          {offerings.map((offering) => (
            <div key={offering.id} className="Offering-card">
              <div className="Offering-card-image">
                <img src={offering.image || "/placeholder.svg"} alt={offering.title} />
              </div>
              <div className="Offering-card-accent-line"></div>
              <div className="Offering-card-content">
                <h3 className="Offering-card-title">{offering.title}</h3>
                <p className="Offering-card-description">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurOfferings