import { React, useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesH2,
} from "./ServicesElements";
import Icon1 from "../../images/zgmt.jpg";
import Icon2 from "../../images/zgmt.jpg";
import Icon3 from "../../images/zgmt.jpg";

const Services = (Popup) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  return (
    <ServicesContainer id="services">
      <ServicesH1>Naše usluge grupnih treninga</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Napredna grupa</ServicesH2>
          <ServicesP>19:00-20:00</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Borilačka grupa</ServicesH2>
          <ServicesP>20:00-21:00</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Početnička grupa</ServicesH2>
          <ServicesP>21:00-22:00</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
