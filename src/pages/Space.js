import { NavLink } from "react-router-dom"
import { ArrowLeft, Rocket, Satellite, Globe } from "lucide-react"

const SpaceTechPage = () => {
    return (
        <div className="space-container">
            {/* Header */}
            {/* <header className="space-header">
        <div className="space-header-content">
          <div className="space-header-inner">
            <NavLink to="/" className="space-back-link">
              <ArrowLeft className="space-back-icon" />
              Back to Home
            </NavLink>
            <div className="space-header-title">
              <div className="space-header-icon">
                <Rocket className="space-rocket-icon" />
              </div>
              <span className="space-header-text">Space Technology</span>
            </div>
          </div>
        </div>
      </header> */}

            {/* Hero Section */}
            <section className="space-hero">
                <div className="space-hero-content">
                    <div className="space-hero-text">
                        <h1 className="space-hero-title">Space Technology</h1>
                        <p className="space-hero-subtitle">Reaching for the Stars, Building India's Space Economy</p>
                        <div className="space-hero-badge">
                            <Rocket className="space-badge-icon" />
                            $44 Billion Potential by 2033
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="space-stats-grid">
                        <div className="space-stat-card space-stat-1">
                            <div className="space-stat-number">$8.4Bn</div>
                            <p className="space-stat-label">Current Market Value</p>
                        </div>
                        <div className="space-stat-card space-stat-2">
                            <div className="space-stat-number">$44Bn</div>
                            <p className="space-stat-label">Projected by 2033</p>
                        </div>
                        <div className="space-stat-card space-stat-3">
                            <div className="space-stat-number">400+</div>
                            <p className="space-stat-label">Industrial Firms</p>
                        </div>
                        <div className="space-stat-card space-stat-4">
                            <div className="space-stat-number">189</div>
                            <p className="space-stat-label">Space Tech Startups</p>
                        </div>
                    </div>

                    {/* Market Growth */}
                    <div className="space-growth">
                        <div className="space-growth-header">
                            <h2 className="space-growth-title">Market Growth Trajectory</h2>
                            <p className="space-growth-desc">India's space economy growth from 2% to 8% global share</p>
                        </div>
                        <div className="space-growth-visual">
                            <div className="space-growth-item">
                                <div className="space-growth-circle space-current">
                                    <span className="space-growth-percent">2%</span>
                                </div>
                                <p className="space-growth-label">Current Share</p>
                            </div>
                            <div className="space-growth-bar">
                                <div className="space-growth-progress"></div>
                            </div>
                            <div className="space-growth-item">
                                <div className="space-growth-circle space-target">
                                    <span className="space-growth-percent">8%</span>
                                </div>
                                <p className="space-growth-label">Target by 2033</p>
                            </div>
                        </div>
                    </div>

                    {/* Investment Areas */}
                    <div className="space-investment">
                        <h2 className="space-investment-title">Key Investment Areas</h2>
                        <div className="space-investment-grid">
                            <div className="space-investment-item">
                                <div className="space-investment-icon">
                                    <Satellite className="space-investment-svg" />
                                </div>
                                <h3 className="space-investment-name">Satellite Technology</h3>
                                <p className="space-investment-desc">
                                    Communication satellites, earth observation, and navigation systems
                                </p>
                            </div>
                            <div className="space-investment-item">
                                <div className="space-investment-icon">
                                    <Rocket className="space-investment-svg" />
                                </div>
                                <h3 className="space-investment-name">Launch Vehicles</h3>
                                <p className="space-investment-desc">
                                    Rocket technology, propulsion systems, and launch infrastructure
                                </p>
                            </div>
                            <div className="space-investment-item">
                                <div className="space-investment-icon">
                                    <Globe className="space-investment-svg" />
                                </div>
                                <h3 className="space-investment-name">Ground Systems</h3>
                                <p className="space-investment-desc">Ground stations, tracking systems, and data processing centers</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="space-cta">
                        <h3 className="space-cta-title">Join India's Space Revolution</h3>
                        <p className="space-cta-desc">
                            Invest in the technologies that will define the future of space exploration
                        </p>
                        {/* <button className="space-cta-button">Launch Your Investment</button> */}
                        <NavLink to="/ContactUs" className="space-cta-button">
                           Launch Your Investment
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SpaceTechPage
