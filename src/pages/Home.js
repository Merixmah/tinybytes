import React from "react";
import planetikon from "../icons/planet.png";
import costumerikon from "../icons/costumer.png";
import ratingikon from "../icons/rating.png";
import logo from "../images/lottie.json";
import Lottie from "lottie-react";
import Contactform from "../components/Contactform";

function Hvorforos() {
  return (
    <main>
      <h1 className="Titel">Welcome to TinyBytes</h1>
      <Lottie
        className="logo"
        animationData={logo}
        loop={true}
        height={800}
        width={1000}
        style={{
          top: "10px",
          left: "10px",
        }}
      />
      <p className="Hometekst">
        Tinybytes er webbureauet der specialisere sig i bæredygtig webdesign.
        Det vil sige at vi designer og udvikler effektive hjemmesider der skaber
        resultater, og samtidig forminsker forureningen på miljøet.
      </p>
      <div className="missiontekst">
        <h1>Vores Mission</h1>
        <p>
          Vores mission som webbureau er at kunne skabe brugervenlige og
          bæredygtige websites løsninger til små og nyopstartede virksomheder.
          Meningen med dette er at kunne udskille virksomheden fra deres
          konkurrenter, og på den måde vise sig som værende et miljøvenligt
          virksomhed.
        </p>
      </div>
      <div className="ikoner">
        <img
          src={planetikon}
          alt="Kilde: Save icon -Freepik from flaticon.com"
          className="ikon1"
        />

        <img
          src={costumerikon}
          alt="Kilde: Costumer icon -Uniconabs from flaticon.com"
          className="ikon2"
        />
        <img
          src={ratingikon}
          alt="Kilde: Analytics -Smashicons from flaticon.com"
          className="ikon3"
        />
      </div>
      <div className="tekstikoner">
        <p>Nedsat CO2-udlednigner</p>
        <p>Forbedret brugeroplevelser</p>
        <p>Højere konverteringsrater</p>
      </div>
      <div>
        <h1 className="snaktekst">
          Meld dig til nu, til en uforpligtende snak! Udfyld formularen her, og
          lad os tag en snak om hvordan vi kan hjælpe dig i mål, og få
          realiseret dine visioner
        </h1>
      </div>
      <Contactform />
    </main>
  );
}

export default Hvorforos;
