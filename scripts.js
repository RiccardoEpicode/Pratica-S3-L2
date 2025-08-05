//DOM MANIPULATION - Riccardo R. - 08-05-2025

/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in 
       qualcos'altro
    */

const changeTitle = function () {
  document.getElementById("pageTitle").innerHTML =
    "Apprendiamo la manipolazione del DOM";
};

changeTitle();

/* ESERCIZIO 2
   Scrivi una funzione per aggiungere al titolo della pagina una 
   classe "myHeading"
*/

const addClassToTitle = function () {
  const titleClass = document.querySelector("h1");
  titleClass.classList.add("myHeading");
};

addClassToTitle();

/* ESERCIZIO 3
   Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  const p = document.querySelectorAll("div p");

  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = "Testo di tutti i tag p cambiato";
  }
};

changePcontent();

/* ESERCIZIO 4
   Scrivi una funzione che cambi la proprietà href di ogni link 
   (tranne quello nel footer) con il valore https://www.google.com
*/

//CASO 1

// const changeUrls = function () {
//   const newLinkID = document.getElementById("link1");
//   newLinkID.href = "https://www.google.com";
//   newLinkSelect.target =  "_blank";
// };

// changeUrls();

//CASO 2

const changeUrls = function () {
  const newLinkSelect = document.querySelector("a");

  newLinkSelect.href = "https://www.google.com";
  newLinkSelect.target = "_blank";
};

changeUrls();

/* ESERCIZIO 5
    Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda 
    lista non ordinata
*/

const addToTheSecond = function () {
  const secondLI = document.getElementById("secondList");

  const nuovoLI = document.createElement("li");

  nuovoLI.innerHTML = "Nuovo Elemento Aggiunto";

  secondLI.appendChild(nuovoLI);
};

addToTheSecond();

/* ESERCIZIO 6
   Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
  const addP = document.querySelector("body div");
  const newP = document.createElement("p");

  newP.innerHTML = "Questo e il nuovo p creato nell'esercizio 6";
  addP.appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
   Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  const puff = document.getElementById("firstList");
  puff.remove();
};

hideFirstUl();

/* ESERCIZIO 8 
   Scrivi una funzione che renda verde il background di ogni lista non 
   ordinata
*/

const paintItGreen = function () {
  const allUL = document.querySelectorAll("ul");

  for (let i = 0; i < allUL.length; i++) {
    allUL[i].style.backgroundColor = "green";
  }
};

paintItGreen();

/* ESERCIZIO 9
   Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che 
   l'utente lo clicca
*/

const makeItClickable = function () {
  const h1Letter = document.querySelector("h1");
  h1Letter.onclick = () => {
    return (h1Letter.textContent = h1Letter.textContent.slice(0, -1));
  };
};

makeItClickable();

/* ESERCIZIO 10
   Crea una funzione che, al click sul footer, riveli l'URL del link 
   interno come contenuto di un alert()
*/

const revealFooterLink = function () {
  const footerClick = document.querySelector("footer");
  footerClick.onclick = () => {
    const url = document.querySelector("footer a").href;
    alert(url);
  };
};

revealFooterLink();

/* ESERCIZIO 11
   Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
   La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, 
   quantità, prezzo
*/

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");

  const tabella = document.createElement("table");

  const intestazione = document.createElement("tr");

  const thImmagine = document.createElement("th");
  thImmagine.textContent = "Immagine";

  const thNome = document.createElement("th");
  thNome.textContent = "Nome Prodotto";

  const thQuantita = document.createElement("th");
  thQuantita.textContent = "Quantità";

  const thPrezzo = document.createElement("th");
  thPrezzo.textContent = "Prezzo";

  intestazione.appendChild(thImmagine);
  intestazione.appendChild(thNome);
  intestazione.appendChild(thQuantita);
  intestazione.appendChild(thPrezzo);
  tabella.appendChild(intestazione);

  for (let i = 1; i <= 5; i++) {
    const riga = document.createElement("tr");

    const tdImmagine = document.createElement("td");
    const img = document.createElement("img");

    // PER LINKARE IMMAGINI RANDOM FREE, USA: "https://picsum.photos/100?random=1"

    if (i === 1) img.src = "https://picsum.photos/100?random=1";
    if (i === 2) img.src = "https://picsum.photos/100?random=2";
    if (i === 3) img.src = "https://picsum.photos/100?random=3";
    if (i === 4) img.src = "https://picsum.photos/100?random=4";
    if (i === 5) img.src = "https://picsum.photos/100?random=5";

    img.alt = "Prodotto " + i;
    tdImmagine.appendChild(img);

    const tdNome = document.createElement("td");
    tdNome.textContent = "Prodotto " + i;

    const tdQuantita = document.createElement("td");
    tdQuantita.textContent = Math.floor(Math.random() * 10) + 1;

    const tdPrezzo = document.createElement("td");
    tdPrezzo.textContent = (Math.random() * 50 + 10).toFixed(2) + " €";

    riga.appendChild(tdImmagine);
    riga.appendChild(tdNome);
    riga.appendChild(tdQuantita);
    riga.appendChild(tdPrezzo);

    tabella.appendChild(riga);
  }

  //PADDING ESTERNO:

  tabella.style.border = "1px solid black";
  tabella.style.borderCollapse = "collapse";

  //PADDING INTERNO:

  const spacing = tabella.querySelectorAll("th, td");
  for (let i = 0; i < spacing.length; i++) {
    spacing[i].style.padding = "15px 50px";
    spacing[i].style.border = "1px solid black";
  }

  tableArea.appendChild(tabella);
};

generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente 
       creata e fornisca i dati necessari come parametri
*/

const addRow = function () {};

/* ESERCIZIO 14
   Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
   Crea una funzione che cambi il colore del h2 con id "changeMyColor" con 
   un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {};
