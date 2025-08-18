"use client"

import { useState, useEffect } from "react"
import "../component_css/leadership.css"


const LeadershipTeam = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [currentLayout, setCurrentLayout] = useState(1)

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

  const teamData = [
    {
      name: "S Bhanuchandran",
      position: "Partner",
      image: "/placeholder.svg?height=300&width=300&text=S+Bhanuchandran",
    },
    {
      name: "Ravitheja K",
      position: "Partner",
      image: "/placeholder.svg?height=300&width=300&text=Ravitheja+K",
    },
    {
      name: "Arun Kumar",
      position: "Compliance Officer",
      image: "/placeholder.svg?height=300&width=300&text=Arun+Kumar",
    },
  ]

  return (
    <div className="team-main-container">
      {/* Layout Navigation */}
      <div className="team-nav-buttons">
        <button
          className={`team-nav-btn ${currentLayout === 1 ? "team-nav-active" : ""}`}
          onClick={() => setCurrentLayout(1)}
        >
          Circle Design
        </button>
        <button
          className={`team-nav-btn ${currentLayout === 2 ? "team-nav-active" : ""}`}
          onClick={() => setCurrentLayout(2)}
        >
          Side Design
        </button>
        <button
          className={`team-nav-btn ${currentLayout === 3 ? "team-nav-active" : ""}`}
          onClick={() => setCurrentLayout(3)}
        >
          Vintage Design
        </button>
      </div>

      {/* Circle Layout Design */}
      <div className={`team-layout-wrapper ${currentLayout === 1 ? "team-layout-active" : "team-layout-hidden"}`}>
        <section className="team-circle-section" data-section="circle">
          <div className="team-wrapper">
            <div className="team-header-section">
              <h2 className="team-main-title">Leadership Team</h2>
              <p className="team-main-description">Meet our experienced leaders</p>
            </div>

            <div className="team-circle-container">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className={`team-circle-item ${visibleSections.has("circle") ? "team-circle-animate" : ""}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="team-circle-photo-side">
                    <div className="team-circle-photo-wrapper">
                      <div className="team-circle-ring-rotate"></div>
                      <div className="team-circle-photo-inner">
                        <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-circle-img" />
                      </div>
                      <div className="team-circle-pulse-ring"></div>
                    </div>
                  </div>
                  <div className="team-circle-text-side">
                    <div className="team-circle-info-box">
                      <div className="team-wave-background">
                        <svg className="team-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="team-wave-fill"
                          ></path>
                          <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="team-wave-fill"
                          ></path>
                          <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="team-wave-fill"
                          ></path>
                        </svg>
                      </div>
                      <div className="team-circle-text-content">
                        <h3 className="team-circle-name">{member.name}</h3>
                        <p className="team-circle-role">{member.position}</p>
                        <div className="team-circle-line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Side Layout Design */}
      <div className={`team-layout-wrapper ${currentLayout === 2 ? "team-layout-active" : "team-layout-hidden"}`}>
        <section className="team-side-section" data-section="side">
          <div className="team-wrapper">
            <div className="team-header-section">
              <h2 className="team-main-title">Leadership Team</h2>
              <p className="team-main-description">Experienced professionals driving our vision</p>
            </div>

            <div className="team-side-container">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className={`team-side-item ${index % 2 === 1 ? "team-side-reverse" : ""} ${visibleSections.has("side") ? "team-side-animate" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="team-side-photo-area">
                    <div className="team-side-photo-frame">
                      <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-side-img" />
                      <div className="team-side-photo-overlay"></div>
                    </div>
                  </div>
                  <div className="team-side-text-area">
                    <div className="team-side-content-box">
                      <div className="team-side-badge">
                        <span className="team-side-badge-dot"></span>
                        LEADERSHIP
                      </div>
                      <h3 className="team-side-name">{member.name}</h3>
                      <p className="team-side-position">{member.position}</p>
                      <div className="team-side-decorative">
                        <div className="team-side-dot-1"></div>
                        <div className="team-side-dot-2"></div>
                        <div className="team-side-dot-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Vintage Layout Design */}
      <div className={`team-layout-wrapper ${currentLayout === 3 ? "team-layout-active" : "team-layout-hidden"}`}>
        <section className="team-vintage-section" data-section="vintage">
          <div className="team-wrapper">
            <div className="team-header-section">
              <h2 className="team-main-title">Leadership Team</h2>
              <p className="team-main-description">Distinguished leaders with proven expertise</p>
            </div>

            <div className="team-vintage-grid">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className={`team-vintage-card ${visibleSections.has("vintage") ? "team-vintage-animate" : ""}`}
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <div className="team-vintage-frame">
                    <div className="team-vintage-corners">
                      <span className="team-corner team-corner-tl"></span>
                      <span className="team-corner team-corner-tr"></span>
                      <span className="team-corner team-corner-bl"></span>
                      <span className="team-corner team-corner-br"></span>
                    </div>
                    <div className="team-vintage-photo">
                      <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-vintage-img" />
                      <div className="team-vintage-filter"></div>
                    </div>
                  </div>
                  <div className="team-vintage-info">
                    <h3 className="team-vintage-name">{member.name}</h3>
                    <p className="team-vintage-position">{member.position}</p>
                    <div className="team-vintage-divider"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LeadershipTeam
