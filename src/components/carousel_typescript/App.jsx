import React from "react";
import { CarouselOne } from "./CarouselOne";

import img1 from '../../images/car1.jpg';
import img2 from '../../images/car2.jpg';
import img3 from '../../images/car3.jpg';
import img4 from '../../images/car4.jpg';
import img5 from '../../images/car5.jpeg';

export const App = () => {
    const imgs = [img1, img2, img3, img4, img5];
    return <CarouselOne imgs={ imgs }></CarouselOne>;
}