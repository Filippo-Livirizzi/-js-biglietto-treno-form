const kmElement = document.getElementById("km");
console.log(kmElement);
const etaElement = document.getElementById("eta");
console.log(etaElement);
const btnElement = document.getElementById("submit");
btnElement.addEventListener('click', function(event){
    const km = parseFloat(kmElement.value /*string*/) // number
	console.log('numero di km percorsi: ', km)
     const eta = parseFloat(etaElement.value);
     console.log('La tua età:', eta)

})