import { db, collection, addDoc } from "./firebase.js";

function generateCaseNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PCR-${year}-${random}`;
}

window.odeslat = async function () {

  const typ = document.getElementById("typ").value;
  const jmeno = document.getElementById("jmeno").value;
  const popis = document.getElementById("popis").value;
  const policista = document.getElementById("policista").value;

  const cisloSpisu = generateCaseNumber();

  await addDoc(collection(db, "spisy"), {
    cislo_spisu: cisloSpisu,
    typ_spisu: typ,
    jmeno: jmeno,
    popis: popis,
    odpovedny_policista: policista,
    cas: new Date().toISOString(),
    stav: "OTEVŘENÝ"
  });

  alert("Spis uložen: " + cisloSpisu);
};
