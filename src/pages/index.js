import * as React from "react"
import { Recaptcha } from "../components/recaptcha";
import { ButtonAddToCar } from "../components/button_add_to_car/ButtonAddToCar";
import { AnimatedBolb } from "../components/animate_bolb/animated_bolb";
import img from '../images/example.png';
import { ButtonSharedIcons } from "../components/button_shared_icons/button_shared_icons";
import { App } from "../components/carousel_typescript/App";

const IndexPage = () => {
  return(
    <>
      {/*<Recaptcha></Recaptcha>*/}
      {/*<ButtonAddToCar></ButtonAddToCar>*/ }
      {/** <AnimatedBolb img={img}></AnimatedBolb> */}
      {/** <ButtonSharedIcons></ButtonSharedIcons> */}
      <App></App>
      <ButtonSharedIcons></ButtonSharedIcons> 
    </>
  );
}

export default IndexPage;