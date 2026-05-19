import { db, collection, getDocs } from "./firebase.js";

const data = await getDocs(collection(db, "spisy"));

let html = "";

data.forEach((doc) => {
  const d = doc.data();

  html += `
  <div class="card">
    <h3>${d.cislo_spisu}</h3>
    <p>Typ: ${d.typ_spisu}</p>
    <p>Osoba: ${d.jmeno}</p>
    <p>Popis: ${d.popis}</p>
    <p>Policista: ${d.odpovedny_policista}</p>
    <p>Stav: ${d.stav}</p>
  </div>
  `;
});

document.getElementById("list").innerHTML = html;
