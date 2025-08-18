import { NavLink } from "react-router-dom"
import { ArrowLeft, Brain, Bot, Cpu, TrendingUp } from "lucide-react"

const ArtificialIntelligencePage = () => {
  return (
    <div className="ai-container">
      {/* Header */}
      {/* <header className="ai-header">
        <div className="ai-header-content">
          <div className="ai-header-inner">
            <NavLink to="/" className="ai-back-link">
              <ArrowLeft className="ai-back-icon" />
              Back to Home
            </NavLink>
            <div className="ai-header-title">
              <div className="ai-header-icon">
                <Brain className="ai-brain-icon" />
              </div>
              <span className="ai-header-text">Artificial Intelligence</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="ai-hero">
        <div className="ai-hero-content">
          <div className="ai-hero-text">
            <h1 className="ai-hero-title">Artificial Intelligence</h1>
            <p className="ai-hero-subtitle">Shaping the Future with Intelligent Solutions</p>
            <div className="ai-hero-badge">
              <Brain className="ai-badge-icon" />
              $1.8-$2.5 Trillion Market by 2030
            </div>
          </div>

          {/* Stats Grid */}
          <div className="ai-stats-grid">
            <div className="ai-stat-card ai-stat-1">
              <div className="ai-stat-number">$2.5T</div>
              <p className="ai-stat-label">Global AI Market by 2030</p>
            </div>
            <div className="ai-stat-card ai-stat-2">
              <div className="ai-stat-number">$1.3T</div>
              <p className="ai-stat-label">Generative AI by 2032</p>
            </div>
            <div className="ai-stat-card ai-stat-3">
              <div className="ai-stat-number">$50B</div>
              <p className="ai-stat-label">VC Funding in 2023</p>
            </div>
            <div className="ai-stat-card ai-stat-4">
              <div className="ai-stat-number">30-40%</div>
              <p className="ai-stat-label">CAGR Growth Rate</p>
            </div>
          </div>

          {/* AI Applications */}
          <div className="ai-applications">
            <div className="ai-apps-header">
              <h2 className="ai-apps-title">Key AI Application Sectors</h2>
              <p className="ai-apps-desc">Transforming industries through intelligent automation</p>
            </div>
            <div className="ai-apps-grid">
              <div className="ai-app-item">
                <div className="ai-app-icon">
                  <span className="ai-app-emoji">🏥</span>
                </div>
                <h3 className="ai-app-name">Healthcare</h3>
                <p className="ai-app-text">Drug discovery, diagnostics, robotic surgery, personalized medicine</p>
              </div>
              <div className="ai-app-item">
                <div className="ai-app-icon">
                  <span className="ai-app-emoji">💰</span>
                </div>
                <h3 className="ai-app-name">Finance</h3>
                <p className="ai-app-text">Fraud detection, risk management, algorithmic trading, automation</p>
              </div>
              <div className="ai-app-item">
                <div className="ai-app-icon">
                  <span className="ai-app-emoji">🛒</span>
                </div>
                <h3 className="ai-app-name">Retail & E-commerce</h3>
                <p className="ai-app-text">Recommendation engines, virtual assistants, inventory management</p>
              </div>
            </div>
          </div>

          {/* Investment Focus Areas */}
          <div className="ai-opportunities">
            <h2 className="ai-opportunities-title">AI Investment Opportunities</h2>
            <div className="ai-opportunities-grid">
              <div className="ai-opportunities-column">
                <div className="ai-opportunity-item">
                  <div className="ai-opportunity-icon">
                    <Brain className="ai-opportunity-icon-svg" />
                  </div>
                  <div className="ai-opportunity-content">
                    <h3 className="ai-opportunity-title">Machine Learning</h3>
                    <p className="ai-opportunity-desc">
                      Advanced ML algorithms, neural networks, and deep learning solutions
                    </p>
                  </div>
                </div>
                <div className="ai-opportunity-item">
                  <div className="ai-opportunity-icon">
                    <Bot className="ai-opportunity-icon-svg" />
                  </div>
                  <div className="ai-opportunity-content">
                    <h3 className="ai-opportunity-title">Generative AI</h3>
                    <p className="ai-opportunity-desc">
                      Large language models, content generation, and creative AI applications
                    </p>
                  </div>
                </div>
              </div>
              <div className="ai-opportunities-column">
                <div className="ai-opportunity-item">
                  <div className="ai-opportunity-icon">
                    <Cpu className="ai-opportunity-icon-svg" />
                  </div>
                  <div className="ai-opportunity-content">
                    <h3 className="ai-opportunity-title">AI Hardware</h3>
                    <p className="ai-opportunity-desc">
                      Specialized chips, edge computing, and AI acceleration hardware
                    </p>
                  </div>
                </div>
                <div className="ai-opportunity-item">
                  <div className="ai-opportunity-icon">
                    <TrendingUp className="ai-opportunity-icon-svg" />
                  </div>
                  <div className="ai-opportunity-content">
                    <h3 className="ai-opportunity-title">AI Platforms</h3>
                    <p className="ai-opportunity-desc">MLOps, AI development tools, and enterprise AI solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Growth Visualization */}
          <div className="ai-growth">
            <h3 className="ai-growth-title">AI Market Growth Trajectory</h3>
            <div className="ai-growth-chart">
              <div className="ai-growth-bar">
                <div className="ai-bar ai-bar-1"></div>
                <span className="ai-bar-year">2024</span>
                <span className="ai-bar-value">$250B</span>
              </div>
              <div className="ai-growth-bar">
                <div className="ai-bar ai-bar-2"></div>
                <span className="ai-bar-year">2027</span>
                <span className="ai-bar-value">$1T</span>
              </div>
              <div className="ai-growth-bar">
                <div className="ai-bar ai-bar-3"></div>
                <span className="ai-bar-year">2030</span>
                <span className="ai-bar-value">$2.5T</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="ai-cta">
            <h3 className="ai-cta-title">Invest in the AI Revolution</h3>
            <p className="ai-cta-desc">Be part of the technology that will reshape every industry and aspect of life</p>
            <NavLink to="/ContactUs" className="ai-cta-button">
              Unlock AI Opportunities
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArtificialIntelligencePage
