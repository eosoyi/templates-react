import React, { useState } from "react";

import { FaFacebook, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import '../button_shared_icons/style.css';

export const ButtonSharedIcons = () => {
    return(
        <>
            <section className="section-button-shared-icons">
                <div className="btn-wrap-shared-icons">
                    <span>Shared</span>
                    <div className="container-shared-icons">
                        <a href="#" className="i-shared-icons"><FaFacebook ></FaFacebook ></a>
                        <a href="#" className="i-shared-icons"><FaLinkedin ></FaLinkedin ></a>
                        <a href="#" className="i-shared-icons"><FaWhatsapp ></FaWhatsapp ></a>
                        <a href="#" className="i-shared-icons"><FaTwitter></FaTwitter></a>
                    </div>
                </div>
            </section>
        </>
    );
}