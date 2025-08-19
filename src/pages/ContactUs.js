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
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // Special handling for phone number
    if (name === "phone") {
      // Remove all non-digit characters
      const numericValue = value.replace(/\D/g, "")
      
      // Limit to 10 digits
      const limitedValue = numericValue.slice(0, 10)
      
      setFormData((prev) => ({
        ...prev,
        [name]: limitedValue,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validate phone number if provided
    if (formData.phone && formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits")
      setIsSubmitting(false)
      return
    }

    console.log('Submitting contact form data:', formData)

    try {
      // Get the API URL from environment variable
      const url = process.env.REACT_APP_API || "http://localhost/iedf-contact-form.php"
      
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

      const result = await response.json()
      console.log('Response data:', result)

      if (result.success) {
        setSubmitStatus('success')
        alert("Thank you for reaching out! We'll get back to you within 24 hours.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus('error')
        console.error('Server error:', result)
        alert("Error: " + (result.error || 'Unknown error occurred'))
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setSubmitStatus('error')
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        alert("Network error: Unable to connect to server. Please check if the server is running and CORS is properly configured.")
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
                      <label htmlFor="name">Full Name <span style={{color:"red"}}>*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="Contact-form-group">
                      <label htmlFor="email">Email Address <span style={{color:"red"}}>*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="Contact-form-row">
                    <div className="Contact-form-group">
                      <label htmlFor="phone">Phone Number </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter You Contact Number"
                        maxLength="10"
                        pattern="[0-9]{10}"
                        title="Please enter exactly 10 digits"
                        disabled={isSubmitting}
                      />
                      {formData.phone && formData.phone.length > 0 && formData.phone.length < 10 && (
                        <small style={{ color: '#e74c3c', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                          Phone number must be exactly 10 digits ({formData.phone.length}/10)
                        </small>
                      )}
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
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="Contact-form-group">
                    <label htmlFor="subject">Subject <span style={{color:"red"}}>*</span></label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange} 
                      required
                      disabled={isSubmitting}
                    >
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
                    <label htmlFor="message">Message <span style={{color:"red"}}>*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      required
                      placeholder="Tell us about your idea, project, or how we can help you..."
                      disabled={isSubmitting}
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