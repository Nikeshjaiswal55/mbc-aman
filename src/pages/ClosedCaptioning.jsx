import React, { useState } from 'react';
import './closedcaptioning.css';

function ClosedCaptioning() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="content">
                <h2>LEARN ALL ABOUT CLOSED CAPTIONING ON MBC</h2>
                <p>
                    The MBC Broadcast Networks are pleased to offer closed captioning across a wide variety of programming made available on television and online. To report an issue or concern regarding closed captioning on MBC Network programs viewed on television or online, please contact us at <a href="mailto:CCFeedback@MBCni.com">CCFeedback@MBCni.com</a> or 1-866-787-6228. If your concern relates to a local program (such as local news or sports) or syndicated programming (such as Steve Harvey, Ellen DeGeneres, Meredith Vieira), please contact your local NBC station.
                </p>

                <p className="separator">⋅ ⋅ ⋅ ⋅ ⋅</p>

                <p>Please detail your issue or concern by providing the following information:</p>
                <ul>
                    <li>Your name, address, telephone number and email address</li>
                    <li>Your preferred method of contact (phone or email)</li>
                    <li>The name of the program with the captioning issue</li>
                    <li>A brief description of the captioning issue, including the date and time you experienced the problem</li>
                    <li>If you are watching on television, please provide the name of your pay TV provider</li>
                    <li>If you are watching online, please identify the device and brand (e.g., computer, tablet, smartphone) and software version you are using</li>
                </ul>

                <p>If you wish to submit a written complaint, please send it to:</p>
                <address>
                    Angela Ball<br />
                    Senior Vice President, Regulatory Affairs<br />
                    MBCniversal<br />
                    300 New Jersey Avenue, NW<br />
                    Suite 700<br />
                    Washington, DC 20001<br />
                </address>

                <p>Email: <a href="mailto:ccfeedback@MBCni.com">ccfeedback@MBCni.com</a></p>
            </div>
        </div>
    );
}

export default ClosedCaptioning;
