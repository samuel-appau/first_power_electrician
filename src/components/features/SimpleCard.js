import React from "react";
import "./SimpleCard.scss";
import emergencyElectrician from "../../images/emergency-electrician.jpg";
import inspec from "../../images/borehole.png";
import lighting from "../../images/street_light.jpg";
import pat from "../../images/air_conditioning.jpeg";
import rewire from "../../images/wire.jpg";
import install from "../../images/Ecg.jpg";

import Electrician from "../../images/Electrician.png";
import Emergency from "../../images/Emergency.png";
import Lighting from "../../images/Lighting.png";
import PatTesting from "../../images/Pat-testing.png";
import Repair from "../../images/Repair.png";
import ReWiring from "../../images/Re-Wiring.png";



export default ({
  cards = [
    {
      imageSrc: emergencyElectrician,
      title: "Emergency Electrical Services",
      description: "On hand to help with almost any electrical emergency in Accra.",
      icon: Emergency,
      url: "Emergency"
    },
    {
      imageSrc: install,
      title: "E.C.G Service Lines Extension",
      description: "Highly experienced in a wide array of ECG service lines repairs and installations, covering both domestic and commercial jobs.",
      icon: Repair,
      url: "Installation"
    },
    {
      imageSrc: inspec,
      title: "Borehole Pump Maintenance and Installation",
      description: "We can assist with regular Borehole Pump maintenance and installation.",
      icon: Electrician,
      url: "Inspections"
    },
    {
      imageSrc: rewire,
      title: "Electrical Rewiring Services",
      description: "To meet modern safety standards, electrical rewiring is essential if your property is over 25 years old and has never been rewired.",
      icon: ReWiring,
      url: "Rewiring"
    },
    {
      imageSrc: lighting,
      title: "Street Light Installation",
      description: "If you’re in need of any light fitting or repairing, be that in your home, business or outdoors, speak to First Power Electrical Services.",
      icon: Lighting,
      url: "Light"
    },
    {
      imageSrc: pat,
      title: "Air Condition Works",
      description: "Fix and ensure the proper functioning of your air conditioning system:",
      icon: PatTesting,
      url: ""
    },
    
  ],
  linkText = "Learn More",
  // heading = "",
  // subheading = "",
  // description = "",
  // imageContainerCss = null,
  // imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <div className="content-wrapper">
          {cards.map((card, i) => (
  
  <div class="news-card">
    <a href={card.url} class="news-card__card-link"> </a>
    <img src={ card.imageSrc } alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">{card.title}</h2>
    <img src={ card.icon } alt="" class="serv-icon" />

      <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">{ card.description }</p>
        <a href={card.url} class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
          ))}

</div>
  );
};
