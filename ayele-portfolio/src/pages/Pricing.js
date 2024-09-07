import React from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

import './Pricing.css';

function Pricing() {
    return (
        <div>
            <Navbar />
            <div className="price-full">
                <div className="price-text">
                    <h1>Research and Consulting Services</h1>
                    <div className="price-para">
                        <p>I offer tailored pricing packages to meet the specific needs of my clients. Whether you are a smallholder farmer or a large-scale producer, I can provide research and consulting services that help you meet your goals and achieve success in the industry.</p>
                    </div>
                    
                </div>
                <div className="prices">
                    <div className="price">
                        <h2>Basic Package</h2>
                        <p>For Small Projects</p>
                        <p>______________</p>
                        <h1>$49.99</h1>
                        <p>Per Project</p>
                        <Link to=''>Get Started</Link>
                    </div>
                    <div className="price-select">
                        <h2>Medium Package</h2>
                        <p>For Medium Projects</p>
                        <p>______________</p>
                        <h1>$79.99</h1>
                        <p>Per Project</p>
                        <Link to=''>Get Started</Link>
                    </div>
                    <div className="price">
                        <h2>Expert Package</h2>
                        <p>For Big Projects</p>
                        <p>______________</p>
                        <h1>$99.99</h1>
                        <p>Per Project</p>
                        <Link to=''>Get Started</Link>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default Pricing;