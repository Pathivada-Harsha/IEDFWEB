"use client"

import { useEffect, useRef, useState } from "react"
import "../component_css/FundSnapShot.css"

const FundSnapshot = () => {
  const [isVisible, setIsVisible] = useState({
    metrics: false,
    details: false,
    badge: false,
  })
  const [animatedNumbers, setAnimatedNumbers] = useState({})
  
  const metricsRef = useRef(null)
  const detailsRef = useRef(null)
  const badgeRef = useRef(null)

  // Number counter animation
  const animateNumber = (target, duration = 1500) => {
    const element = document.querySelector(`[data-number="${target}"]`)
    if (!element) return

    const cleanTarget = target.replace(/[^0-9]/g, '')
    const numericTarget = parseInt(cleanTarget) || 0
    const increment = numericTarget / (duration / 16)
    let current = 0

    const updateNumber = () => {
      current += increment
      if (current >= numericTarget) {
        current = numericTarget
        element.textContent = target
      } else {
        const prefix = target.replace(/[0-9]/g, '')
        const suffix = target.replace(/[0-9]/g, '')
        element.textContent = Math.floor(current).toString()
        if (target.includes('INR')) {
          element.textContent = `INR ${Math.floor(current)}`
        } else if (target.includes('+')) {
          element.textContent = `${Math.floor(current)}+2`
        } else if (target.includes('-')) {
          const firstNum = target.split('-')[0]
          const secondNum = target.split('-')[1]
          if (current < parseInt(firstNum)) {
            element.textContent = Math.floor(current).toString()
          } else {
            element.textContent = target
          }
        } else {
          element.textContent = Math.floor(current).toString()
        }
      }
      
      if (current < numericTarget) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            
            if (target === metricsRef.current && !isVisible.metrics) {
              setIsVisible(prev => ({ ...prev, metrics: true }))
              
              // Animate metric cards
              const cards = target.querySelectorAll('.metric-card')
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate')
                  const numberElement = card.querySelector('.metric-number')
                  if (numberElement) {
                    numberElement.classList.add('animate-number')
                    setTimeout(() => {
                      const numberText = numberElement.textContent
                      animateNumber(numberText, 1000)
                    }, 300)
                  }
                }, index * 100)
              })
            }
            
            if (target === detailsRef.current && !isVisible.details) {
              setIsVisible(prev => ({ ...prev, details: true }))
              
              // Animate detail sections
              const sections = target.querySelectorAll('.detail-section')
              sections.forEach((section, index) => {
                setTimeout(() => {
                  section.classList.add('animate')
                  
                  // Animate detail items within each section
                  const items = section.querySelectorAll('.detail-item')
                  items.forEach((item, itemIndex) => {
                    setTimeout(() => {
                      item.classList.add('animate')
                    }, itemIndex * 100)
                  })
                }, index * 200)
              })
            }
            
            if (target === badgeRef.current && !isVisible.badge) {
              setIsVisible(prev => ({ ...prev, badge: true }))
              target.classList.add('animate')
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (metricsRef.current) observer.observe(metricsRef.current)
    if (detailsRef.current) observer.observe(detailsRef.current)
    if (badgeRef.current) observer.observe(badgeRef.current)

    return () => observer.disconnect()
  }, [isVisible])

  const fundData = [
    {
      category: "Fund Overview",
      items: [
        {
          label: "Size of the Fund",
          value: "INR 200 Crores",
          highlight: true,
        },
        {
          label: "Green Shoe Option",
          value: "INR 50 Crores",
          highlight: true,
        },
        {
          label: "SEBI Registration",
          value: "Category 1 Fund",
          subValue: "Registration No. IN/AIF1/16-17/0305",
        },
      ],
    },
    {
      category: "Fund Structure",
      items: [
        {
          label: "Life of Fund",
          value: "7 years + 2 years",
        },
        {
          label: "Investment Period",
          value: "2-3 years",
        },
        {
          label: "Target Portfolio",
          value: "10-15 companies",
        },
      ],
    },
  ]

  const keyMetrics = [
    {
      number: "INR 250 Cr",
      label: "Total Fund Size",
      sublabel: "(Including Green Shoe)",
      icon: "💰",
    },
    {
      number: "7+2",
      label: "Fund Life",
      sublabel: "Years",
      icon: "⏰",
    },
    {
      number: "10-15",
      label: "Target Portfolio",
      sublabel: "Companies",
      icon: "🏢",
    },
    {
      number: "2-3",
      label: "Investment Period",
      sublabel: "Years",
      icon: "📈",
    },
  ]

  return (
    <div className="fund-snapshot">
      <div className="container">
        <div className="snapshot-header">
          <div className="header-badge">
            <span className="badge-dot"></span>
            FUND SNAPSHOT
          </div>
          <h2 className="snapshot-title">Investment Fund Overview</h2>
          <p className="snapshot-description">
            SEBI registered Category 1 Alternative Investment Fund focused on strategic investments across high-growth
            sectors.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="metrics-grid" ref={metricsRef}>
          {keyMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-content">
                <div className="metric-number" data-number={metric.number}>
                  {metric.number}
                </div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-sublabel">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Information */}
        <div className="details-grid" ref={detailsRef}>
          {fundData.map((section, index) => (
            <div key={index} className="detail-section">
              <h3 className="detail-title">{section.category}</h3>
              <div className="detail-items">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`detail-item ${item.highlight ? "highlighted" : ""}`}>
                    <div className="item-row">
                      <span className="item-label">{item.label}</span>
                      <span className="item-value">{item.value}</span>
                    </div>
                    {item.subValue && <div className="item-subtext">{item.subValue}</div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Registration Badge */}
        <div className="registration-badge" ref={badgeRef}>
          <div className="badge-content">
            <div className="badge-icon">🏛️</div>
            <div className="badge-text">
              <div className="badge-title">SEBI Registered</div>
              <div className="badge-subtitle">Category 1 AIF • Registration No. IN/AIF1/16-17/0305</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundSnapshot