import { NavLink } from "react-router-dom"
import { ArrowLeft, Shield, Plane, Target, TrendingUp } from "lucide-react"

const DefenceAerospacePage = () => {
  return (
    <div className="def-container">
      {/* Header */}
      {/* <header className="def-header">
        <div className="def-header-content">
          <div className="def-header-inner">
            <NavLink to="/" className="def-back-link">
              <ArrowLeft className="def-back-icon" />
              Back to Home
            </NavLink>
            <div className="def-header-title">
              <div className="def-header-icon">
                <Shield className="def-shield-icon" />
              </div>
              <span className="def-header-text">Defence & Aerospace</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="def-hero">
        <div className="def-hero-content">
          <div className="def-hero-text">
            <h1 className="def-hero-title">Defence & Aerospace</h1>
            <p className="def-hero-subtitle">Securing India's Future Through Innovation</p>
            <div className="def-hero-badge">
              <Target className="def-badge-icon" />
              $26 Billion Market by 2025
            </div>
          </div>

          {/* Stats Grid */}
          <div className="def-stats-grid">
            <div className="def-stat-card def-stat-1">
              <div className="def-stat-number">$26Bn</div>
              <p className="def-stat-label">Target Turnover by 2025</p>
            </div>
            <div className="def-stat-card def-stat-2">
              <div className="def-stat-number">$5Bn</div>
              <p className="def-stat-label">Export Target</p>
            </div>
            <div className="def-stat-card def-stat-3">
              <div className="def-stat-number">411</div>
              <p className="def-stat-label">Military Items Listed</p>
            </div>
            <div className="def-stat-card def-stat-4">
              <div className="def-stat-number">194</div>
              <p className="def-stat-label">Defence Tech Startups</p>
            </div>
          </div>

          {/* Key Opportunities */}
          <div className="def-opportunities">
            <h2 className="def-opportunities-title">Investment Opportunities</h2>
            <div className="def-opportunities-grid">
              <div className="def-opportunities-column">
                <div className="def-opportunity-item">
                  <div className="def-opportunity-icon">
                    <Shield className="def-opportunity-icon-svg" />
                  </div>
                  <div className="def-opportunity-content">
                    <h3 className="def-opportunity-title">Defence Manufacturing</h3>
                    <p className="def-opportunity-desc">
                      Advanced weapon systems, surveillance technology, and military equipment manufacturing
                    </p>
                  </div>
                </div>
                <div className="def-opportunity-item">
                  <div className="def-opportunity-icon">
                    <Plane className="def-opportunity-icon-svg" />
                  </div>
                  <div className="def-opportunity-content">
                    <h3 className="def-opportunity-title">Aerospace Innovation</h3>
                    <p className="def-opportunity-desc">
                      Aircraft components, UAV technology, and aerospace engineering solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="def-opportunities-column">
                <div className="def-opportunity-item">
                  <div className="def-opportunity-icon">
                    <TrendingUp className="def-opportunity-icon-svg" />
                  </div>
                  <div className="def-opportunity-content">
                    <h3 className="def-opportunity-title">Supply Chain</h3>
                    <p className="def-opportunity-desc">
                      6000+ MSMEs supplying components to DPSUs and private industries
                    </p>
                  </div>
                </div>
                <div className="def-opportunity-item">
                  <div className="def-opportunity-icon">
                    <Target className="def-opportunity-icon-svg" />
                  </div>
                  <div className="def-opportunity-content">
                    <h3 className="def-opportunity-title">R&D Innovation</h3>
                    <p className="def-opportunity-desc">
                      Cutting-edge research in defence technology and aerospace engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="def-cta">
            <h3 className="def-cta-title">Ready to Invest in India's Defence Future?</h3>
            <p className="def-cta-desc">
              Join us in building a stronger, more secure India through strategic investments
            </p>
            {/* <button className="def-cta-button">Explore Investment Opportunities</button> */}
             <NavLink to="/ContactUs" className="def-cta-button">
              Explore Investment Opportunities
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DefenceAerospacePage
