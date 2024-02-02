import React from "react";
import "./infobar.scss";
import InfoItem from "./InfoItems";

const handleCall = () => {
  window.location.href = `tel:0592739920}`;
};


const CommentDetail = () => {
  
  return (
    <div className="nav-info">
      
      <InfoItem title="OUR LOCATION" content="New Bortianor, Accra">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-map-marker-alt fa-stack-1x"></i>
        </span>
      </InfoItem>
      <p onClick={handleCall}>
      <InfoItem title="CALL US"  content="+233 592739920">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-phone-alt fa-stack-1x"></i>
        </span>
      </InfoItem>
      </p>
      <InfoItem title="MAIL US" content="kwabenaemmanuel326@gmail.com">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-envelope fa-stack-1x"></i>
        </span>
      </InfoItem>
    </div>
  );
};

export default CommentDetail;
