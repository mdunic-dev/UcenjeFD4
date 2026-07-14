//varijabla je prostor u radnoj memoriji

//varijabla ima svoj naziv
//u JS postoje tri vrste vaijabli

// 1. vrsta const (konstanta - ne može se mijenjat)

const ime = prompt('Unesi ime')
console.log(ime)
console.log('ime', typeof ime, ime) //ime string <ono što korisnik unese>
console.log(`Dobar dan ${ime}!!!!`)

//tip podatka number
const unosBroj = '2026' //string

//želim konvertirati u broj

const broj = Number(unosBroj)

console.log('unosBroj', typeof unosBroj, unosBroj)
console.log('broj', typeof broj, broj)

const pi = parseFloat('3.14') // točka je zbog amera
console.log('pi', typeof pi, pi)

const lv = true // lv -> skraćeno od logickaVrijednost

console.log('lv', typeof lv, lv)

// pi = 3.14159 Uncaught TypeError: Assignement to constant variable.

// 2. način deklariranja varijable (prava varijabla)

let x = 7
console.log('x', typeof x, x)

x = 8
console.log('x', typeof x, x)

x = 'Osijek' //mogu promjeniti tip podatka

console.log('x', typeof x, x)

//let x=7 // ne mogu ga redeklarirati


var t = 5
t = 'Osijek' //dozvoljava promjenu tipa
var t = true // dozvoljava redeklaraciju varijable

//tip podatka object
// JSON -> JavaScript Object Notation

const osoba = {
    id: 1,
    ime: 'Pero',
    visina: 182.5,
    znaProgramirati: true
}
console.log('osoba', typeof osoba/*,osoba*/) //komentar u kodu
console.table(osoba)

//tip podatka Array
//niz,polje, a JS to zove object

const niz = [2, 3, 4, 3, 5, 3] //AltGr +F i G

console.log('niz', typeof niz)
console.table(niz)


    const json =[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

console.log(json)

//tip podatka function
//stari način definiranja funkcije
/*
function pozdrav() {
        console.log('Pozdrav iz stare funkcije')
    }

console.log('pozdrav', typeof pozdrav)
*/
// novi način
const pozdravi = () => console.log('Pozdrav iz nove funkcije')

console.log('pozdravi', typeof pozdravi)

//izvođenje funkcija
pozdrav()
pozdravi()

const id1=Symbol('edunova') // edunova je opis ali je vrijednost jedinstvena i nije vidljiva
const id2 = Symbol('edunova')

// = je operator dodjeljavanja
// operator uspoređivanja vrijednosti
// == provjerava po vrijednosti
// === provjerava po tipu i po vrijednosti

console.log ('7'==7) //false
console.log ('7' === 7) //false
console.log(7===7) //true

consolelog(id1 == id2) //false
console.log(id1 === id2)  //false

