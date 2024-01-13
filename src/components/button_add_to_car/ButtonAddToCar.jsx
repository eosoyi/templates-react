import React, { useState } from "react";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";

import '../button_add_to_car/style.css';


export const ButtonAddToCar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }



    return(
        <>
            <div className="container-add-to-car">
                <div className="concainer-square-add-to-car">
                    <div className="container-btn-add-to-car"
                        onClick={handleClick}
                    >
                        <FaShoppingCart className={` i-car ${clicked ? 'i-car-animation' : ''}`} />
                        <FaCheckCircle className={` i-car-ok ${clicked ? 'i-car-ok-effect' : ''}`}/>
                        <span className={`${clicked ? 'fade-out' : ''}`}>Add to cart</span>
                        <span className={`txt-success ${clicked ? 'txt-success-efect' : ''}`}>Successful</span>
                    </div>
                </div>
            </div>
        </>
    );
}