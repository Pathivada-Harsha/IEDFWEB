"use client"

import "../component_css/ContactUs.css"
import { useState } from "react"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log('Submitting contact form data:', formData)

    try {
      // Point to your PHP server (XAMPP typically runs on port 80)
      const url = 'http://localhost/iedf-contactus.php'
      
      console.log('Sending request to:', url)

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Response data:', result)

      if (result.success) {
        alert("Thank you for reaching out! We'll get back to you within 24 hours.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        console.error('Server error:', result)
        alert("Error: " + (result.error || 'Unknown error occurred'))
        
        // Log debug info if available
        if (result.debug) {
          console.log('Debug info:', result.debug)
        }
      }
    } catch (error) {
      console.error('Fetch error:', error)
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        alert("Network error: Unable to connect to server. Please check if the server is running on http://localhost/")
      } else if (error.message.includes('HTTP error')) {
        alert(`Server error: ${error.message}`)
      } else {
        alert("Failed to submit form. Error: " + error.message)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Office Address",
      details: ["Prakriya Venture Technologies LLP", "Bangalore, Karnataka, India"],
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["info@prakriyaventures.com", "partnerships@prakriyaventures.com"],
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 80 1234 5678", "+91 80 8765 4321"],
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
    },
  ]

  return (
    <div className="Contact-contact-us">
      {/* Hero Section */}
      <section className="Contact-hero">
        <div className="Contact-hero-background">
          <div className="Contact-hero-overlay"></div>
        </div>
        <div className="Contact-hero-content">
          <div className="Contact-container">
            <div className="Contact-hero-badge">
              <span className="Contact-badge-text">Get In Touch</span>
            </div>
            <h1 className="Contact-hero-title">Have Ideas? Let's Connect</h1>
            <p className="Contact-hero-quote">
              "Great ideas deserve great partnerships. Share your vision with us and let's build the future together."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="Contact-main">
        <div className="Contact-container">
          <div className="Contact-layout">
            {/* Contact Information */}
            <div className="Contact-info-section">
              <div className="Contact-section-header">
                <h2 className="Contact-section-title">Let's Start a Conversation</h2>
                <p className="Contact-section-description">
                  Whether you're an entrepreneur with a groundbreaking idea, an investor looking for opportunities, or a
                  partner seeking collaboration, we're here to listen and explore possibilities together.
                </p>
              </div>

              <div className="Contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="Contact-info-card">
                    <div className="Contact-info-icon">{info.icon}</div>
                    <div className="Contact-info-content">
                      <h3 className="Contact-info-title">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="Contact-info-detail">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="Contact-cta-section">
                <h3 className="Contact-cta-title">Ready to Transform Your Ideas?</h3>
                <p className="Contact-cta-description">
                  Join our portfolio of innovative companies and let's create something extraordinary together.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="Contact-form-section">
              <div className="Contact-form-container">
                <div className="Contact-form-header">
                  <h3 className="Contact-form-title">Send Us a Message</h3>
                  <p className="Contact-form-subtitle">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="Contact-form" onSubmit={handleSubmit}>
                  <div className="Contact-form-row">
                    <div className="Contact-form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="Contact-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="Contact-form-row">
                    <div className="Contact-form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="Contact-form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="Contact-form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required>
                      <option value="">Select a subject</option>
                      <option value="investment-inquiry">Investment Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="portfolio-company">Portfolio Company Support</option>
                      <option value="media-press">Media & Press</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="Contact-form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      required
                      placeholder="Tell us about your idea, project, or how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="Contact-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="Contact-spinner"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="Contact-btn-arrow">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs