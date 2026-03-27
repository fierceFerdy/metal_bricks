


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

// class Invoice{

//   constructor(factuurNr, datum, vervalDatum, bedrijfNaam, bedrijfStraat, bedrijfStad, bedrijfPostcode, klantNaam, klantStraat, klantStad){
//     this.factuurNr = factuurNr;
//     this.datum = datum;
//     this.vervalDatum = vervalDatum;
//     this.bedrijfNaam = bedrijfNaam;
//     this.bedrijfStraat = bedrijfStraat;
//     this.bedrijfStad = bedrijfStad;
//     this.bedrijfStad = bedrijfPostcode;
//     this.klantNaam = klantNaam;
//     this.klantStraat = klantStraat;
//     this.klantStad = klantStad;
//   }

// }

// const invoice2 = new Invoice(123, 0-0-0, 0-0-0, "Metal Bricks", "begijnhoflaan 1",);
// console.log(invoice2);



class Klant{
  constructor(naam, straat, straatNr, stad, postcode){
    this.naam = naam;
    this.straat = straat;
    this.straatNr = straatNr;
    this.stad = stad;
    this.postcode = postcode;
  }
  get Info(){
    return this.naam = naam;
    this.straat = straat;
    this.naam = naam;
    this.naam = naam;
    this.naam = naam;
    
  }
}

class factuur{
  constructor(factuurNr, datum, vervalDatum, klant){
    this.factuurNr = factuurNr;
    this.datum = datum;
    this.vervalDatum = vervalDatum;
    this.klant = klant;
  }
}