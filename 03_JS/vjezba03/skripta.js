





//prvo uvećaj pa koristi

console.log (++i) //2

//ista pravila vrijede i za --

//zna biti na razgovorima za posao

i=2
let j=1
i=j++ -i // 1-2= -1, i= -1, j=2
j += --i - ++j // -2 - 3=-5, 3+-5=-2, i=-2 j=-3
console.log (i-j) // -2 - -3 = 1

//operatori uspoređivanja == ===
// != različito po vrijednosti
// !== po vrijednosti i tipu

console.log ('5' !=4) // True - različito je
console.log (5 != 5) // false - isto je
console.log ('5' !== 5) //true - različito je

const uvijet = '5' !==5

console.log ('uvijet', typeof uvijet,uvijet) // false

// <,>, <= i >=

const godine = 18

console.log (godine > 18) // false - 18 nije veće od 18
console.log (godine >= 18) // true


//logički operatori
//AND, OR, i NOT (I, ILI i NE)
// AND: &&, OR: || i NOT: ! --> U JS se ne smije koristiti & za logičko i jer je & binarno množenje

const punoljetan = godine >= 18

console.log (uvijet && punoljetan) // false

//vrijede pravbila booleovih tablica
// https://introcs.cs.princeton.edu/java/71boolean/images/truth-table.png


console.log (uvijet || punoljetan) // true

console.log(uvijet,!uvijet) // false true

//operator spajanja - nadoljepljivanja (concatetination)
// +
// kada se + koristi kod dva broja zbraja se
// kada se + koristi kod različitih tipova podataka, spajaju se

console.log ('Pero ima ' + godine + 'godina')
console. log(`Pero ima ${godine} godina`)

const x='7', y=5
console.log (x+y) //75

// spread operator - operator proširivanja (...)

const niz = [1,2]

console.table [niz]

const noviNiz = [0, ...niz, 3]

console.log (noviNiz)

const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
}

console.table(osoba)

const polaznik = {
    ... osoba,
    edukacija: 'FD'

}
console.table (polaznik)
// suprotno od spread je destructing operator - operator destrukcije

const [prvi, drugi]= [1,2]
//varijabla prvi ima vrijednost 1 a varijabla drugi im vrijednost 2
console.log (prvi,drugi)

// destrukcija objekta

const {prezime, ...meniBitno} = polaznik

// prezime je u ovom slučaju škart

console.table (meniBitno)

//nullish calescing operator

let sifra

console.log (sifra ?? 'Šifra nije postavljena')

sifra ='30900836-d3e2-44a4-baa7-745fe308f4ec'

console.log (sifra ?? 'Šifra nije postavljena')

//optional chaining operator ?.
// prije toga idemo vidjeti što radi .

const korisnik = {

    adresa: {
        grad: 'Osijek',
        ulica: 'Trg'
    }
}
//. služi da pristupam svojstvima i metodama (funkcijama) na objektima
console.log (korisnik.adresa.grad.toUpperCase())
//?. omogućava da kod "ne pukne"
console.log (korisnik?.adresa?.grad?.ulica?.toUpperCase() ?? 'Nije Postavljeno')
