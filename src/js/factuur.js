document.addEventListener("DOMContentLoaded", function(){
  var urlString = window.location.href;
  urlParams = parseURLParams(urlString);

  document.getElementById("invoice").innerHTML = "test"
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


const invoice = {
  factuurNr: "123",
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

};

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
klant1 = new Klant('dqd','dsqdsq','qdsqsd', 'sdqsdq','dsffsd')
product1 = new FactuurProduct(1, 'hallo', 3)
factuur1 = new Factuur(456,456,456, product1, klant1)



console.log(factuur1);