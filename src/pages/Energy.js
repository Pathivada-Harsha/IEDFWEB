import { NavLink } from "react-router-dom"
import { ArrowLeft, Leaf, Sun, Wind, Battery } from "lucide-react"

const CleanEnergyPage = () => {
    return (
        <div className="clean-container">
            {/* Header */}
            {/* <header className="clean-header">
        <div className="clean-header-content">
          <div className="clean-header-inner">
            <NavLink to="/" className="clean-back-link">
              <ArrowLeft className="clean-back-icon" />
              Back to Home
            </NavLink>
            <div className="clean-header-title">
              <div className="clean-header-icon">
                <Leaf className="clean-leaf-icon" />
              </div>
              <span className="clean-header-text">Clean Energy</span>
            </div>
          </div>
        </div>
      </header> */}

            {/* Hero Section */}
            <section className="clean-hero">
                <div className="clean-hero-content">
                    <div className="clean-hero-text">
                        <h1 className="clean-hero-title">Clean Energy Solutions</h1>
                        <p className="clean-hero-subtitle">Powering India's Sustainable Future</p>
                        <div className="clean-hero-badge">
                            <Sun className="clean-badge-icon" />
                            500 GW Renewable Target by 2030
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="clean-stats-grid">
                        <div className="clean-stat-card clean-stat-1">
                            <div className="clean-stat-number">500 GW</div>
                            <p className="clean-stat-label">Renewable Target 2030</p>
                        </div>
                        <div className="clean-stat-card clean-stat-2">
                            <div className="clean-stat-number">4th</div>
                            <p className="clean-stat-label">Global Renewable Rank</p>
                        </div>
                        <div className="clean-stat-card clean-stat-3">
                            <div className="clean-stat-number">₹24,000Cr</div>
                            <p className="clean-stat-label">PLI for Solar PV</p>
                        </div>
                        <div className="clean-stat-card clean-stat-4">
                            <div className="clean-stat-number">128%</div>
                            <p className="clean-stat-label">Capacity Growth Since 2014</p>
                        </div>
                    </div>

                    {/* Renewable Energy Mix */}
                    <div className="clean-energy-mix">
                        <div className="clean-mix-header">
                            <h2 className="clean-mix-title">India's Renewable Energy Journey</h2>
                            <p className="clean-mix-desc">Leading the global transition to clean energy</p>
                        </div>
                        <div className="clean-mix-grid">
                            <div className="clean-mix-item">
                                <Sun className="clean-mix-icon clean-solar-icon" />
                                <h3 className="clean-mix-name">Solar Power</h3>
                                <p className="clean-mix-text">Abundant solar resources across India</p>
                            </div>
                            <div className="clean-mix-item">
                                <Wind className="clean-mix-icon clean-wind-icon" />
                                <h3 className="clean-mix-name">Wind Energy</h3>
                                <p className="clean-mix-text">Coastal and inland wind potential</p>
                            </div>
                            <div className="clean-mix-item">
                                <Battery className="clean-mix-icon clean-battery-icon" />
                                <h3 className="clean-mix-name">Energy Storage</h3>
                                <p className="clean-mix-text">Grid stability and storage solutions</p>
                            </div>
                            <div className="clean-mix-item">
                                <Leaf className="clean-mix-icon clean-hydrogen-icon" />
                                <h3 className="clean-mix-name">Green Hydrogen</h3>
                                <p className="clean-mix-text">Future fuel for clean energy</p>
                            </div>
                        </div>
                    </div>

                    {/* Investment Opportunities */}
                    <div className="clean-opportunities">
                        <h2 className="clean-opportunities-title">Investment Opportunities</h2>
                        <div className="clean-opportunities-grid">
                            <div className="clean-opportunities-column">
                                <div className="clean-opportunity-item">
                                    <div className="clean-opportunity-icon">
                                        <Sun className="clean-opportunity-icon-svg" />
                                    </div>
                                    <div className="clean-opportunity-content">
                                        <h3 className="clean-opportunity-title">Solar Manufacturing</h3>
                                        <p className="clean-opportunity-desc">
                                            Solar panels, inverters, and component manufacturing with PLI support
                                        </p>
                                    </div>
                                </div>
                                <div className="clean-opportunity-item">
                                    <div className="clean-opportunity-icon">
                                        <Wind className="clean-opportunity-icon-svg" />
                                    </div>
                                    <div className="clean-opportunity-content">
                                        <h3 className="clean-opportunity-title">Wind Technology</h3>
                                        <p className="clean-opportunity-desc">
                                            Wind turbines, offshore wind, and advanced wind energy systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="clean-opportunities-column">
                                <div className="clean-opportunity-item">
                                    <div className="clean-opportunity-icon">
                                        <Battery className="clean-opportunity-icon-svg" />
                                    </div>
                                    <div className="clean-opportunity-content">
                                        <h3 className="clean-opportunity-title">Energy Storage</h3>
                                        <p className="clean-opportunity-desc">
                                            Battery technology, grid storage, and smart energy management
                                        </p>
                                    </div>
                                </div>
                                <div className="clean-opportunity-item">
                                    <div className="clean-opportunity-icon">
                                        <Leaf className="clean-opportunity-icon-svg" />
                                    </div>
                                    <div className="clean-opportunity-content">
                                        <h3 className="clean-opportunity-title">Green Hydrogen</h3>
                                        <p className="clean-opportunity-desc">
                                            Electrolysis technology, fuel cells, and hydrogen infrastructure
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="clean-progress">
                        <h3 className="clean-progress-title">India's Clean Energy Progress</h3>
                        <div className="clean-progress-item">
                            <div className="clean-progress-info">
                                <span className="clean-progress-label">Renewable Capacity Growth</span>
                                <span className="clean-progress-value">128%</span>
                            </div>
                            <div className="clean-progress-bar">
                                <div className="clean-progress-fill"></div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="clean-cta">
                        <h3 className="clean-cta-title">Invest in India's Green Future</h3>
                        <p className="clean-cta-desc">Join the renewable energy revolution and build a sustainable tomorrow</p>
                        {/* <button className="clean-cta-button">Go Green with Your Investment</button> */}
                        <NavLink to="/ContactUs" className="clean-cta-button">
                            Go Green with Your Investment
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CleanEnergyPage
