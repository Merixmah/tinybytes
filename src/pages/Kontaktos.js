import React from "react";
import Contactform from "../components/Contactform";

function Contact() {
  return (
    <main>
      <h1 className="Titel"> Deltag I Samtalen</h1>
      <p className="Hometekst">
        Today, more than ever, design thinkers will need to keep focus on
        creating human-centred solutions which also serve our planet.
      </p>
      <p className="Teksttype">
        Er du frisk på en uforfligtende samtale, så meld dig til her, og vi
        kontakter dig!
      </p>

      <p className="Teksttype">Vi vil vildt gerne høre fra dig</p>
      <Contactform />
    </main>
  );
}

export default Contact;
