/*  
 * Obiekty - to pojemniki do przechowywania zmiennych i funkcji tematycznie 
 *           ze sobą związanych do dalszego łatwiejszego ponownego użycia
 *           
 * 
 */

var div = document.getElementById("test");

div.innerHTML = "nowa treść";
/*
var osoba = {
    imie: "Areks", 
    nazwisko: "Włodarczyk",
    pobierzInformacje: function()
    {        
        return this.imie + " " + this.nazwisko;
    },
    toString: function()
    {
        return this.imie + " " + this.nazwisko;
    }
};
/*
var osoba = new Object({
    imie: "Areks", 
    nazwisko: "Włodarczyk",
    pobierzInformacje: function()
    {        
        return this.imie + " " + this.nazwisko;
    },
    toString: function()
    {
        return this.imie + " " + this.nazwisko;
    }        
}
);
*/

div.innerHTML = osoba;

osoba.imie = "Wiola";