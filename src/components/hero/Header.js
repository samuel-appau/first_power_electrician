import React from "react";

import { Button } from "../Button";
import { FeaturesList } from "../other/FeatureList";
import electrician from "../../images/hero_1.jpeg";

import "./Hero.scss";



const Header = () => {
  return (
    <div className="hero-head">
      <div class="l-flex-parent">
        <div class="l-flex-child l-grid-half">
          <div class="example-item  hero-col-left">
            <h2>Providing excellent and professional service for all</h2>

            <Button className="btn btn--large">BOOK NOW</Button> 

            <FeaturesList>Available in Accra</FeaturesList>
            <FeaturesList>Certified Electrician</FeaturesList>
            <FeaturesList>Available 24/7</FeaturesList>

          </div>
        </div>

        <div class="l-flex-child l-grid-half">
          <div class="example-item col-right">
            <img
              src={ electrician } 
              class="hero-img" alt="electrician"
            ></img>
            <svg viewBox="0 0 1280 1280" class="hero-svg">
              <path d="M55 33.5C44.5 37 35 47.6 32.8 58.3c-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 33.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.4 25.5 19.4 4.1 39.5-14.2 37.5-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 33.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 33.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM1207 33.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM55 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 161.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.4 25.5 19.4 4.1 39.5-14.2 37.5-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 161.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 161.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM1207 161.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM55 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 289.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 417.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 545.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 673.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 801.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM439 801.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM567 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 801.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 801.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 929.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM439 929.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM567 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 929.5c-15.1 5-25.3 21.6-22.2 36.2 2.5 11.9 13.6 23 25.5 25.5 19.3 4.1 39.4-14.2 37.4-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 929.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 1057.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM439 1057.5c-10.5 3.5-20 14.1-22.2 24.8-2.5 11.7 3.2 24.4 14.2 31.9 10.7 7.4 22.9 7.5 33.7.3 17.7-11.8 20.1-33.8 5.3-48.5-8.5-8.6-20.7-11.9-31-8.5zM567 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 1057.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM55 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM183 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM311 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM439 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM567 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM695 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM823 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM951 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1079 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6zM1207 1185.5c-10.5 3.5-20 14.1-22.2 24.8-4.3 20.6 16.3 41.2 36.9 36.9 15.5-3.2 27.5-19 26-33.9-1.1-10.5-9-21.3-19-26.2-6.1-2.9-15.5-3.6-21.7-1.6z"></path>
            </svg>

            <div class="img-card">
              <svg viewBox="0 0 24 24" class="img-card-quote">
                <path
                  fill="currentColor"
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                ></path>
              </svg>
              <blockquote class="">
                First Power is raising the bar of electrical services.
                Since 2020, we are here to serve customers with
                comprehensive line of electrical and related work
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
