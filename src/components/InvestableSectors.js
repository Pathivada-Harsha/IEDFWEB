"use client"

import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import "../component_css/InvestableSectors.css"
import invest1 from "../images/Home_hero/investsec1.png"
import invest2 from "../images/Home_hero/investsec2.png"
import invest3 from "../images/Home_hero/investsec3.png"
import invest4 from "../images/Home_hero/investsec4.png"
import invest5 from "../images/Home_hero/investsec5.png"
import invest6 from "../images/Home_hero/investsec6.png"

const InvestibleSectors = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState(new Set())
  const scrollContainerRef = useRef(null)
  
  const sectors = [
    {
      id: 1,
      title: "Defence",
      description:
        "Investing in cutting-edge defense technologies that enhance national security and protect our future. From autonomous systems to advanced materials, we support innovations that strengthen defense capabilities.",
      image: invest2,
      buttonText: "Know more",
      route: "/DefenceAero"
    },
    {
      id: 2,
      title: "Space",
      description:
        "Supporting visionary space ventures that push the boundaries of exploration and satellite technology. We invest in companies developing next-generation propulsion, communication, and observation systems.",
      image: invest3,
      buttonText: "Know more",
      route: "/Space"
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description:
        "Investing in AI technologies that transform industries and enhance human capabilities. We support machine learning, computer vision, and automation solutions that drive the next wave of innovation.",
      image: invest4,
      buttonText: "Know more",
      route: "/Ai"
    },
    {
      id: 4,
      title: "Clean Energy",
      description:
        "Backing sustainable energy solutions that power tomorrow's world. From solar innovations to energy storage breakthroughs, we invest in technologies that create a cleaner, more sustainable future.",
      image: invest6,
      buttonText: "Know more",
      route: "/Energy"
    },
    {
      id: 5,
      title: "Electronics & Communication",
      description:
        "Investing in next-generation communication infrastructure and electronic technologies. We focus on 5G, IoT, and semiconductor innovations that enable smarter, faster, and more connected systems.",
      image: invest5,
      buttonText: "Know more",
      route: "/Electronics"
    }
  ]

  const nextSlide = () => {
    if (currentIndex < sectors.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth + 20 // card width + gap
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
    }
  }

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth + 20 // card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getVisibleSectors = () => {
    return sectors.slice(currentIndex, currentIndex + 3)
  }

  const handleCardClick = (sectorId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(sectorId)) {
        newSet.delete(sectorId)
      } else {
        newSet.add(sectorId)
      }
      return newSet
    })
  }

  // Prevent card flip when clicking the NavLink button
  const handleButtonClick = (e) => {
    e.stopPropagation()
  }

  // Check if navigation is at the limits
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex >= sectors.length - 3

  return (
    <div className="investible-sectors">
      <div className="container">
        <div className="header">
          <h2 className="title">Investible Sectors</h2>
          <button className="view-all-btn">
            View All Sectors
            <svg className="arrow-icon1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Desktop and Large Tablet Layout */}
        <div className="carousel-container desktop-layout">
          <button 
            className={`nav-btn prev-btn ${isAtStart ? 'disabled' : ''}`} 
            onClick={prevSlide}
            disabled={isAtStart}
          >
            {isAtStart ? (
              // Block icon for disabled state
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M4.93 4.93l14.14 14.14"/>
              </svg>
            ) : (
              // Regular arrow icon
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            )}
          </button>

          <div className="sectors-grid">
            {getVisibleSectors().map((sector, index) => (
              <div
                key={sector.id}
                className={`sector-card ${flippedCards.has(sector.id) ? "mobile-flipped" : ""}`}
                onClick={() => handleCardClick(sector.id)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={sector.image || "/placeholder.svg"} alt={sector.title} className="sector-image" />
                    <div className="image-overlay">
                      <h3 className="sector-title-front">{sector.title}</h3>
                    </div>
                  </div>

                  <div className="card-back">
                    <img
                      src={sector.image || "/placeholder.svg"}
                      alt={sector.title}
                      className="background-image-faded"
                    />
                    <div className="text-content">
                      <h3 className="sector-title-back">{sector.title}</h3>
                      <p className="sector-description">{sector.description}</p>
                      <NavLink 
                        to={sector.route} 
                        className="know-more-btn"
                        onClick={handleButtonClick}
                      >
                        {sector.buttonText}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={`nav-btn next-btn ${isAtEnd ? 'disabled' : ''}`} 
            onClick={nextSlide}
            disabled={isAtEnd}
          >
            {isAtEnd ? (
              // Block icon for disabled state
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M4.93 4.93l14.14 14.14"/>
              </svg>
            ) : (
              // Regular arrow icon
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </button>
        </div>

        {/* Tablet Layout */}
        <div className="carousel-container tablet-layout">
          <button className="nav-btn prev-btn" onClick={scrollPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="sectors-scroll" ref={scrollContainerRef}>
            {sectors.map((sector) => (
              <div
                key={sector.id}
                className={`sector-card ${flippedCards.has(sector.id) ? "mobile-flipped" : ""}`}
                onClick={() => handleCardClick(sector.id)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={sector.image || "/placeholder.svg"} alt={sector.title} className="sector-image" />
                    <div className="image-overlay">
                      <h3 className="sector-title-front">{sector.title}</h3>
                    </div>
                  </div>

                  <div className="card-back">
                    <img
                      src={sector.image || "/placeholder.svg"}
                      alt={sector.title}
                      className="background-image-faded"
                    />
                    <div className="text-content">
                      <h3 className="sector-title-back">{sector.title}</h3>
                      <p className="sector-description">{sector.description}</p>
                      <NavLink 
                        to={sector.route} 
                        className="know-more-btn"
                        onClick={handleButtonClick}
                      >
                        {sector.buttonText}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn next-btn" onClick={scrollNext}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-scroll-container">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className={`sector-card mobile-card ${flippedCards.has(sector.id) ? "mobile-flipped" : ""}`}
              onClick={() => handleCardClick(sector.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={sector.image || "/placeholder.svg"} alt={sector.title} className="sector-image" />
                  <div className="image-overlay">
                    <h3 className="sector-title-front">{sector.title}</h3>
                  </div>
                </div>

                <div className="card-back">
                  <img src={sector.image || "/placeholder.svg"} alt={sector.title} className="background-image-faded" />
                  <div className="text-content">
                    <h3 className="sector-title-back">{sector.title}</h3>
                    <p className="sector-description">{sector.description}</p>
                    <NavLink 
                      to={sector.route} 
                      className="know-more-btn"
                      onClick={handleButtonClick}
                    >
                      {sector.buttonText}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots desktop-dots">
          {Array.from({ length: sectors.length - 2 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InvestibleSectors