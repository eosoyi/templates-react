import React from "react";

import '../animate_bolb/style.css';

export const AnimatedBolb = ({ img }) => {
    return (
        <>
            <section className="section-animated-bolb">
                <figure className="wrapper-animated-bolb">
                    <img src={ img } alt="img"  className="box-animated-bolb"/>
                </figure>
            </section>
        </>
    );
}