import React, { useEffect, useState } from "react";
import { FaRedoAlt } from "react-icons/fa";

import '../styles/styles-recaptcha.css';


export const Recaptcha = () => {
    const fonts = ["Cursive", "sans-serif", "serif", "monospace"];
    const [captchaValue, setCaptchaValue] = useState("");

    const generateCaptcha = () => {
        let value = btoa(Math.random() * 1000000000);
        value = value.substring(0, 5 + Math.random() * 5);
        setCaptchaValue(value);
    };


    useEffect(() => {
    generateCaptcha();
    }, []);
    
    const handleRefresh = () => {
        generateCaptcha();
    };

    const handleLogin = () => {
        const inputCaptchaValue = document.getElementById("captcha-form").value;

        if (inputCaptchaValue === captchaValue) {
        alert("Logging In");
        } else {
        alert("Invalid captcha");
        }
    };

    return(
      <>
        <div className="login-form">
            <div className="form-title">
                Login form
            </div>
            <div className="form-input">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="form-input">
                <label htmlFor="password">password</label>
                <input type="password" id="password" />
            </div>
            <div className="captcha">
                <label for="captcha-input">Enter recaptcha</label>
                <div className="preview">{captchaValue}</div>
                <div className="captcha-form">
                    <input type="text" id="captcha-form" placeholder="Enter recaptcha text" />
                    <button className="captcha-refresh" onClick={handleRefresh}>
                        <FaRedoAlt className="i"/>
                    </button>
                </div>
            </div>
            <div className="form-input">
                <button id="login-btn" onClick={handleLogin}>Login</button>
            </div>
        </div> 
      </>
    );
}

export default Recaptcha;