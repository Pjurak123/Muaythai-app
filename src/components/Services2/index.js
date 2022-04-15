import { React, useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesH2,
} from "./ServicesElements2";
import Icon1 from "../../images/zgmt.jpg";
import Icon2 from "../../images/zgmt.jpg";
import Icon3 from "../../images/zgmt.jpg";

const Services2 = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  function Popup(props) {
    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn">close</button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
  }

  return (
    <ServicesContainer id="services" onClick={() => setButtonPopup(true)}>
      <ServicesH1>Naše usluge privatnih treninga</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Privatni termin</ServicesH2>
          <ServicesP>10:00-11:00</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Privatni termin</ServicesH2>
          <ServicesP>11:00-12:00</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Privatni termin</ServicesH2>
          <ServicesP>13:00-14:00</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services2;
