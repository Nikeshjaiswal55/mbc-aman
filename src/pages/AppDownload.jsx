import React, { useState, useEffect } from "react";
import "./AppDownload.css";
import main from "../assets/main.jpg";
import iosQRCode from "../assets/qr.png";
import androidQRCode from "../assets/qr.png";
import appStoreBadge from "../assets/logo-apple-store.png";
import playStoreBadge from "../assets/logo-google-play.png";

const AppDownload = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className="app-download-section">
            <h1>The MBC App</h1>
            <p>
                Watch your favorite shows on your favorite screens with the NBC App! Stream the latest full episodes of primetime, 
                daytime, and late-night series, plus can't-miss specials and even complete seasons of select shows on all these platforms:
            </p>
            <div className="app-options">
                <div className="app-option">
                    <h2>iOS App</h2>
                    <img src={main} alt="iOS App" className="app-image" />
                    <a href="#" className="download-link">DOWNLOAD</a>
                    <img src={iosQRCode} alt="iOS QR Code" className="qr-code" />
                    <a href="#" className="store-badge">
                        <img src={appStoreBadge} alt="Download on App Store" />
                    </a>
                </div>
                <div className="app-option">
                    <h2>Android App</h2>
                    <img src={main} alt="Android App" className="app-image" />
                    <a href="#" className="download-link">DOWNLOAD</a>
                    <img src={androidQRCode} alt="Android QR Code" className="qr-code" />
                    <a href="#" className="store-badge">
                        <img src={playStoreBadge} alt="Get it on Google Play" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppDownload;
