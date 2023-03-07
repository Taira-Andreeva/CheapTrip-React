import React from "react";
import "./Cheaptrip.css";
import Logo_Cht from "./Logo_ChT_2.png";
import i18n from "../../i18n";

export default function Cheaptrip() {
  return (
    <div className="Cheaptrip">
      <div className="partners">
        <h3>Our partners:</h3>
      </div>

      <div className="caption">
        <a href="https://cheaptrip.guru/">
          <img src={Logo_Cht} alt="CheapTrip Logo" />
        </a>
      </div>
      <div className="title">{i18n.t("CheapTrip commercial")}</div>
    </div>
  );
}
