import { NavLink } from "react-router-dom"
import { ArrowLeft, Wifi, Smartphone, Radio, TrendingUp } from "lucide-react"

const ElectronicsCommunicationPage = () => {
    return (
        <div className="elec-container">
            {/* Header */}
            {/* <header className="elec-header">
        <div className="elec-header-content">
          <div className="elec-header-inner">
            <NavLink to="/" className="elec-back-link">
              <ArrowLeft className="elec-back-icon" />
              Back to Home
            </NavLink>
            <div className="elec-header-title">
              <div className="elec-header-icon">
                <Radio className="elec-radio-icon" />
              </div>
              <span className="elec-header-text">Electronics & Communication</span>
            </div>
          </div>
        </div>
      </header> */}

            {/* Hero Section */}
            <section className="elec-hero">
                <div className="elec-hero-content">
                    <div className="elec-hero-text">
                        <h1 className="elec-hero-title">Electronics & Communication</h1>
                        <p className="elec-hero-subtitle">Connecting India to the Digital Future</p>
                        <div className="elec-hero-badge">
                            <Wifi className="elec-badge-icon" />
                            $450 Billion 5G Impact (2023-2040)
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="elec-stats-grid">
                        <div className="elec-stat-card elec-stat-1">
                            <div className="elec-stat-number">$450Bn</div>
                            <p className="elec-stat-label">5G Economic Impact</p>
                        </div>
                        <div className="elec-stat-card elec-stat-2">
                            <div className="elec-stat-number">2nd</div>
                            <p className="elec-stat-label">Global Rank in Mobile Broadband</p>
                        </div>
                        <div className="elec-stat-card elec-stat-3">
                            <div className="elec-stat-number">₹4000Cr</div>
                            <p className="elec-stat-label">PLI Scheme Incentives</p>
                        </div>
                        <div className="elec-stat-card elec-stat-4">
                            <div className="elec-stat-number">5%</div>
                            <p className="elec-stat-label">Deep Tech Startups</p>
                        </div>
                    </div>

                    {/* 5G Revolution */}
                    <div className="elec-revolution">
                        <div className="elec-revolution-header">
                            <h2 className="elec-revolution-title">5G Revolution in India</h2>
                            <p className="elec-revolution-desc">Transforming industries and creating new opportunities</p>
                        </div>
                        <div className="elec-revolution-grid">
                            <div className="elec-revolution-item">
                                <Smartphone className="elec-revolution-icon" />
                                <h3 className="elec-revolution-name">Enhanced Mobile</h3>
                                <p className="elec-revolution-text">Ultra-fast mobile broadband experiences</p>
                            </div>
                            <div className="elec-revolution-item">
                                <TrendingUp className="elec-revolution-icon" />
                                <h3 className="elec-revolution-name">IoT Growth</h3>
                                <p className="elec-revolution-text">Massive IoT device connectivity</p>
                            </div>
                            <div className="elec-revolution-item">
                                <Radio className="elec-revolution-icon" />
                                <h3 className="elec-revolution-name">Low Latency</h3>
                                <p className="elec-revolution-text">Ultra-reliable low latency communications</p>
                            </div>
                        </div>
                    </div>

                    {/* Investment Opportunities */}
                    <div className="elec-opportunities">
                        <h2 className="elec-opportunities-title">Investment Focus Areas</h2>
                        <div className="elec-opportunities-grid">
                            <div className="elec-opportunities-column">
                                <div className="elec-opportunity-item">
                                    <div className="elec-opportunity-icon">
                                        <Wifi className="elec-opportunity-icon-svg" />
                                    </div>
                                    <div className="elec-opportunity-content">
                                        <h3 className="elec-opportunity-title">5G Infrastructure</h3>
                                        <p className="elec-opportunity-desc">
                                            Network equipment, base stations, and core infrastructure development
                                        </p>
                                    </div>
                                </div>
                                <div className="elec-opportunity-item">
                                    <div className="elec-opportunity-icon">
                                        <Smartphone className="elec-opportunity-icon-svg" />
                                    </div>
                                    <div className="elec-opportunity-content">
                                        <h3 className="elec-opportunity-title">Device Manufacturing</h3>
                                        <p className="elec-opportunity-desc">
                                            Smartphones, IoT devices, and communication equipment manufacturing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="elec-opportunities-column">
                                <div className="elec-opportunity-item">
                                    <div className="elec-opportunity-icon">
                                        <Radio className="elec-opportunity-icon-svg" />
                                    </div>
                                    <div className="elec-opportunity-content">
                                        <h3 className="elec-opportunity-title">Semiconductor Design</h3>
                                        <p className="elec-opportunity-desc">
                                            Chip design, fabrication, and advanced semiconductor solutions
                                        </p>
                                    </div>
                                </div>
                                <div className="elec-opportunity-item">
                                    <div className="elec-opportunity-icon">
                                        <TrendingUp className="elec-opportunity-icon-svg" />
                                    </div>
                                    <div className="elec-opportunity-content">
                                        <h3 className="elec-opportunity-title">Software Solutions</h3>
                                        <p className="elec-opportunity-desc">Network management, security, and application development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="elec-cta">
                        <h3 className="elec-cta-title">Power India's Digital Transformation</h3>
                        <p className="elec-cta-desc">
                            Invest in the technologies that will connect billions and transform industries
                        </p>
                        {/* <button className="elec-cta-button">Connect with Opportunities</button> */}
                        <NavLink to="/ContactUs" className="elec-cta-button">
                           Connect with Opportunities
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ElectronicsCommunicationPage
