import React from "react";
import darkmode from "../icons/darkmode.png";
import resize from "../icons/resize.png";
import window from "../icons/window.png";

function Tipsogtricks() {
  return (
    <main>
      <h1 className="Titel">Tips og Tricks</h1>

      <div className="tip1">
        <p className="tiptekst">
          Det kunne være en god ide at når du bruger din mobil, eller din pc at
          du indstiller den på Dark-Mode. Da dette er mindre energi belastende,
          og kan være med til at reducere energiforbruget på den enhed du
          bruger. Dette vil sige at benyttelsen dark mode giver færre pixels,
          hvilket medfører til mindre energiforbrug. Reducering af
          energiforbruget på enheder kan også bidrage til reducering af
          belastning for miljøet.
        </p>
        <img
          src={darkmode}
          alt="Kilde: Save icon -Freepik from flaticon.com"
          className="ikon4"
        />
      </div>

      <div className="tip2">
        <p className="tiptekst">
          Optimer billeder og videoer filstørrelse Det kunne være en god ide at
          optimere dine billeder på dine enheder, så som det kunne være super
          godt at du gennem ser din billeder en gang i mellem og såtere fra,
          eller at du slette apps fra din mobiltelefon du ikke bruger. Mindre
          filstørrelser betyder, at der er behov for mindre lagerplads til at
          gemme medier og dette kan bidrage til at reducere behovet for ekstra
          serverkapacitet, hvilket igen kan reducere energiforbruget og de
          samlede omkostninger ved datalagring.
        </p>
        <img
          src={resize}
          alt="Kilde: Resize icon -Freepik from flaticon.com"
          className="ikon4"
        />
      </div>
      <div className="tip1">
        <p className="tiptekst">
          Reducer antallet af åbne faner Når du er på din pc, og har en et par
          faner åbne i dit vindu, er det et super godt initiativ at du lukker de
          faner du ikke har behov for, eller ikke bruger i den tid du bruger.
          dette er også med til at reducere energiforbruget, og dermed at du med
          til at bidrage til at gøre dit tilstedeværelse på nettet mere
          bæredygtigt.
        </p>
        <img
          src={window}
          alt="Kilde: window icon -winnievinzence from flaticon.com"
          className="ikon4"
        />
      </div>
    </main>
  );
}
export default Tipsogtricks;
