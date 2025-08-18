"use client"
import { useEffect, useState } from "react"
import "../component_css/InvestPhilosophy.css"

const InvestPhilosophy = () => {
    const [isMobile, setIsMobile] = useState(false)

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            const newIsMobile = window.innerWidth <= 768
            setIsMobile(newIsMobile)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        
        // Add a small delay to ensure proper layout recalculation
        const handleResizeWithDelay = () => {
            setTimeout(checkScreenSize, 100)
        }
        
        window.addEventListener('resize', handleResizeWithDelay)
        
        return () => {
            window.removeEventListener('resize', checkScreenSize)
            window.removeEventListener('resize', handleResizeWithDelay)
        }
    }, [])

    // Add useEffect to handle sticky positioning for desktop only
    useEffect(() => {
        const stickyElement = document.querySelector(".sticky-content")
        const scrollableContent = document.querySelector(".scrollable-content")
        const philosophyLayout = document.querySelector(".philosophy-layout")
        
        if (stickyElement && scrollableContent && philosophyLayout) {
            if (!isMobile) {
                // Desktop settings
                stickyElement.style.position = "sticky"
                stickyElement.style.top = "20px"
                stickyElement.style.height = "fit-content"
                stickyElement.style.maxHeight = "calc(100vh - 40px)"
                stickyElement.style.overflowY = "auto"
                stickyElement.style.alignSelf = "flex-start"
                stickyElement.style.willChange = "transform"
                stickyElement.style.order = "unset"
                stickyElement.style.marginBottom = "0"
                
                // Reset layout to flex row
                philosophyLayout.style.flexDirection = "row"
                philosophyLayout.style.gap = "80px"
                
                scrollableContent.style.paddingLeft = "40px"
                scrollableContent.style.order = "unset"
                scrollableContent.style.minHeight = "100vh"
            } else {
                // Mobile settings
                stickyElement.style.position = "static"
                stickyElement.style.top = "auto"
                stickyElement.style.height = "auto"
                stickyElement.style.maxHeight = "none"
                stickyElement.style.overflowY = "visible"
                stickyElement.style.alignSelf = "auto"
                stickyElement.style.willChange = "auto"
                stickyElement.style.order = "1"
                stickyElement.style.marginBottom = "20px"
                
                // Set layout to flex column
                philosophyLayout.style.flexDirection = "column"
                philosophyLayout.style.gap = "30px"
                
                scrollableContent.style.paddingLeft = "0"
                scrollableContent.style.order = "2"
                scrollableContent.style.minHeight = "auto"
            }
            
            // Ensure content is always visible
            scrollableContent.style.display = "block"
            scrollableContent.style.visibility = "visible"
            scrollableContent.style.opacity = "1"
        }
        
        // Force a reflow to ensure styles are applied
        setTimeout(() => {
            if (stickyElement) {
                // Trigger reflow by accessing offsetHeight
                const height = stickyElement.offsetHeight;
                // Use the height to avoid unused variable warning
                if (height > 0) {
                    // Reflow triggered successfully
                }
            }
        }, 0)
    }, [isMobile])

    useEffect(() => {
        if (!isMobile) {
            const handleScroll = () => {
                const stickyElement = document.querySelector(".sticky-content")
                if (stickyElement) {
                    console.log("Sticky element position:", window.getComputedStyle(stickyElement).position)
                }
            }

            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [isMobile])

    const philosophyPoints = [
        {
            id: 1,
            title: "Innovation and Cutting-Edge Technology",
            description:
                "Prioritize Startups/SME that demonstrate unique, innovative solutions and technological advancements in the target sectors.",
            icon: "💡",
        },
        {
            id: 2,
            title: "Sustainability and Impact",
            description:
                "Focus on companies that offer sustainable solutions and have the potential for significant social or environmental impact, especially in clean energy.",
            icon: "🌱",
        },
        {
            id: 3,
            title: "Scalability and Market Potential",
            description:
                "Invest in businesses with scalable models that address substantial market needs and have the potential for high growth in national and international markets.",
            icon: "📈",
        },
        {
            id: 4,
            title: "Strong Management Teams",
            description:
                "Back Startups/SME with experienced, diverse, and dynamic leadership capable of navigating complex industries like defence and space tech.",
            icon: "👥",
        },
        {
            id: 5,
            title: "Strategic Partnerships",
            description:
                "Leverage and build strategic partnerships with industry players, governments, and research institutions to enhance the growth potential of our portfolio companies.",
            icon: "🤝",
        },
        {
            id: 6,
            title: "Focus on Value Creation",
            description:
                "90% of the investment is for value creation and 10% for working capital, ensuring maximum impact and sustainable growth for our portfolio companies.",
            icon: "💎",
        },
    ]

    return (
        <div className="invest-philosophy">
            {/* Global Bubble Background */}
            <div className="global-bubble-bg">
                <div className="bubble-layer layer-1">
                    <div className="floating-bubble bubble-xl bubble-1"></div>
                    <div className="floating-bubble bubble-lg bubble-2"></div>
                    <div className="floating-bubble bubble-md bubble-3"></div>
                    <div className="floating-bubble bubble-sm bubble-4"></div>
                    <div className="floating-bubble bubble-lg bubble-5"></div>
                    <div className="floating-bubble bubble-md bubble-6"></div>
                    <div className="floating-bubble bubble-sm bubble-7"></div>
                    <div className="floating-bubble bubble-xl bubble-8"></div>
                </div>
                <div className="bubble-layer layer-2">
                    <div className="floating-bubble bubble-lg bubble-9"></div>
                    <div className="floating-bubble bubble-md bubble-10"></div>
                    <div className="floating-bubble bubble-sm bubble-11"></div>
                    <div className="floating-bubble bubble-xl bubble-12"></div>
                </div>
            </div>

            <div className="container">
                <div className={`philosophy-layout ${isMobile ? 'mobile-layout' : ''}`}>
                    {/* Left Content - Now responsive */}
                    <div className={`sticky-content ${isMobile ? 'mobile-header' : ''}`}>
                        <div className="sticky-inner">
                            <div className="philosophy-badge">
                                <span className="badge-dot"></span>
                                OUR INVESTMENT PHILOSOPHY
                            </div>
                            <h2 className="philosophy-title">
                                We invest with purpose — backing bold ideas in deeptech, driven by data, discipline, and impact.
                            </h2>
                            <p className="philosophy-description">
                                Our philosophy centers on identifying visionary founders solving complex challenges in defence, aerospace,
                                space tech, clean energy, and AI. We follow a structured approach that balances innovation with risk management,
                                aiming to build scalable ventures that deliver measurable economic, ecological, and strategic value.
                            </p>
                        </div>
                    </div>

                    {/* Right Scrollable Content */}
                    <div className="scrollable-content">
                        <div className="philosophy-grid">
                            {philosophyPoints.map((point, index) => (
                                <div key={point.id} className="philosophy-card">
                                    <div className="card-icon">
                                        <div className="icon-circle">
                                            <div className="icon-wrapper">
                                                <span className="icon-emoji">{point.icon}</span>
                                            </div>
                                            <div className="icon-rings">
                                                <div className="ring ring-1"></div>
                                                <div className="ring ring-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{point.title}</h3>
                                        <p className="card-description">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestPhilosophy