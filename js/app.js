const kmElement = document.getElementById("km");
console.log(kmElement);
const etaElement = document.getElementById("eta");
console.log(etaElement);
const infoElement = document.getElementById("info");
const btnElement = document.getElementById("submit");
const resultElement = document.getElementById("result");

infoElement.addEventListener('submit', function (event) {
  event.preventDefault()
  const km = parseFloat(kmElement.value /*string*/) // number
  console.log('numero di km percorsi: ', km);
  const eta = parseFloat(etaElement.value);
  console.log('La tua età:', eta);

  const pricekm = 0.21; //prezzo al km
  //sconto
  let sconto
  //prezzo del biglietto in base i km inseriti
  const subprice = km * pricekm;
  console.log(subprice); 

  //SE eta < di 18 anni verrà applicato uno sconto del 20%
  if (eta < 18) {
    sconto = subprice * 0.2;
  } else if (eta > 65) { //ALTRIMENTI SE eta > 65 anni verrà applicato uno sconto del 40%
    sconto = subprice * 0.4;
  } else { //ALTRIMENTI se eta è compreso tra 18 e 65 non verrà applicato nessuno sconto 
    sconto = 0
  }
  //calcolo del prezzo finale
  const prezzo = subprice - sconto;
  console.log(prezzo.toFixed(2));

  resultElement.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th>Km</th>
        <th>
          età
        </th>
        <th>prezzo totale</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${km} km</td>
        <td>${eta} </td>
        <td>${prezzo.toFixed(2)} €</td>
      </tr>
    </tbody>
  </table>
  `
})
