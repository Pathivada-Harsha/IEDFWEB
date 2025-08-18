import React from 'react';
import { Play } from 'lucide-react';
import '../component_css/Hero.css'; // Import the CSS file
import { NavLink } from "react-router-dom"
const HeroSection = () => {
    return (
        <div className="HP-hero-container">
            {/* Background Image - You'll need to add your mountain image here */}
            <div className="HP-hero-background">
                <div className="HP-hero-overlay"></div>
                {/* Add your mountain image here as a background or img element */}
                <div className="HP-hero-image"></div>
            </div>

            {/* Content Container */}
            <div className="HP-hero-content">
                <div className="HP-hero-text-container">
                    {/* Main Headlines */}
                    <div className="HP-hero-headlines">
                        <h1 className="HP-hero-title">
                            India’s Deeptech Ascent Starts Here
                        </h1>
                        <h2 className="HP-hero-subtitle">
                            Backing Innovation. Accelerating Impact.
                        </h2>
                    </div>

                    {/* Description Text */}
                    <div className="HP-hero-description">
                        <p className="HP-hero-description-line">
                            We invest in visionary founders building the future across defence, space, clean energy, and AI.
                        </p>
                        <p className="HP-hero-description-line">
                            India Electronic Development Fund (IEDF) is a SEBI-registered Category I AIF driving scale, sustainability, and strategic depth.
                        </p>
                        <p className="HP-hero-description-line">
                            With a focus on value creation and technological transformation, we mentor and fund startups on the path to becoming unicorns.
                        </p>
                        <p className="HP-hero-description-line">
                            Powered by Prakriya Ventures, we don’t just fund businesses — we build legacies in national innovation.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="HP-hero-buttons">
                        <NavLink to="/ContactUs" className="HP-hero-contact-btn">
                            <span>Contact Us</span>
                            <svg className="HP-hero-contact-arrow" viewBox="0 0 24 24">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </NavLink>


                        {/* <button className="HP-hero-video-btn">
                            <Play className="HP-hero-video-icon" />
                            <span>Watch the video</span>
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="HP-hero-decorative"></div>
        </div>
    );
};

export default HeroSection;