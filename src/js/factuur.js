document.addEventListener("DOMContentLoaded", function(){
  var urlString = window.location.href;
  urlParams = parseURLParams(urlString);
  console.log(urlParams);

class Klant{
  constructor(naam, straat, straatNr, stad, postcode, IBAN){
    this.naam = naam;
    this.straat = straat;
    this.straatNr = straatNr;
    this.stad = stad;
    this.postcode = postcode;
    this.IBAN = IBAN;
  }
}

class FactuurProduct{
  constructor(product_id, beschrijving, aantal){
    this.product_id = product_id;
    this.beschrijving = beschrijving;
    this.aantal = aantal;
    
  }
}

class Factuur{
  constructor(factuurNr, datum, vervalDatum, product, klant){
    this.factuurNr = factuurNr;
    this.datum = datum;
    this.vervalDatum = vervalDatum;
    this.product = product;
    this.klant = klant;
  } 
}

var falco = new Klant('falco', 'begijnhoflaan', '2', 'Dendermonde', 9200, "12 123456789012");

var customer = falco;

var product1 = new FactuurProduct(1, 'bert', 3);
console.log(product1);


  var startDate = urlParams["startDate"][0];
  var expDate = urlParams["expDate"][0];

  document.getElementById("factuurInfo").innerHTML = `
            <p id="FactuurNr">Factuurnr: ` + factuurNr + `</p><br>
            <p id="startDate">Datum: ` + startDate + `</p><br>
            <p id="expDate">Vervaldatum: ` + expDate + `</p><br>
  `;
  factuurNr++;
  
  document.getElementById("klantInfo").innerHTML = `
            <p>naar:</p>
            <p>naam bedrijf: ` + customer.naam + `</p><br>
            <p>straat+nummer: ` + customer.straat + " " + customer.straatNr + `</p><br>
            <p>postcode+stad: ` + customer.stad + " " + customer.postcode + `</p><br>
  `;


})

function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
      queryEnd   = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {}, i, n, v, nv;

  if (query === url || query === "") return;

  for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}

var factuurNr = 1;

const invoice = {
  factuurNr: factuurNr,
  datum: "0-0-0",
  vervalDatum: "0-0-0",
  // Verkoper info
  bedrijfNaam: "Metal Bricks",
  bedrijfStraat: "Begijnhoflaan 1",
  bedrijfStad: "9200 dendermonde",
  // Client Info
  Naar: "",
  klantNaam: "naam bedrijf",
  klantStraat: "straat + nummer",
  klantStad: "postcode + stad",
  // Producten
  producten: [
    {
      beschrijving: "example 1",
      aantal: 2,
      prijs: 5.00,
      'BTW%': '21%',
      totaalPrijs: 11.00
    }//,{ jkfhdksh: kjlqsdh,}
  ],
  // Totalen
  'Totale prijs excl. BTW:': 10,
  'BTW:': 1,
  'Totale prijs:': 11

}