import { db, collection, addDoc } from "./firebase.js";

function generateCaseNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PCR-${year}-${random}`;
}

window.odeslat = async function () {

  const cisloSpisu = generateCaseNumber();

  await addDoc(collection(db, "spisy"), {

    cislo_spisu: cisloSpisu,

    typ: document.getElementById("typ").value,
    jmeno: document.getElementById("jmeno").value,
    prijmeni: document.getElementById("prijmeni").value,
    datum_narozeni: document.getElementById("datum_narozeni").value,
    obcanstvi: document.getElementById("obcanstvi").value,

    misto: document.getElementById("misto").value,
    cas: document.getElementById("cas").value,

    popis: document.getElementById("popis").value,
    pravni_kvalifikace: document.getElementById("pravni_kvalifikace").value,
    skoda: document.getElementById("skoda").value,

    svedci: document.getElementById("svedci").value,
    dukazy: document.getElementById("dukazy").value,
    zasah: document.getElementById("zasah").value,

    odpovedny_policista: document.getElementById("policista").value,

    stav: "OTEVŘENÝ",
    cas_vytvoreni: new Date().toISOString()
  });

  alert("Spis uložen: " + cisloSpisu);
};
