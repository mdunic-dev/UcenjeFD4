doocument.write('Hello')

//uvjetno grananje if
if (uvijet) {
    console.log('uvijet je true')
}

if (uvjet) {
    console.log(ocjena)
}

const ocjena=3

if (ocjena === 1) {
    console.log('Nedovoljan')
} else if (ocjena === 2) {
    console.log('Dovoljan')
} else if (ocjena === 3) {
    console.log('Dobar')
} else if (ocjena === 4) {
    console.log('Vrlo dobar')
} else if (ocjena === 5) {
    console.log('Izvrstan')
}

// else if može biti koliko želimo
else {
    console.log('Broj nije ocjena')
}

//logički operatori And, Or i Not

if (ocjena >= 1 && ocjena <= 5) {
    console.log('Ocjena je valjana')
}

if (ocjena < 1 || ocjena > 5) {
    console.log('Ocjena nije valjana')
}

if (!(ocjena < 1 || ocjena > 5)) {
    console.log('Ocjena JE valjana na drugi način')
}

//Teranarni operator ?:
//inline if

if (ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}
// kada if i else pozivaju istu funkciju (npr. console.log)

console.log (ocijena>=1 && ocjena<=5 ? 'Ocjena je valjana inline':'Nije ocjena inline')


//JS Specifičnosti
//falsy i truly

const ime='' //string

if(!ime)//(ime==='')
{
    console.log('Ime nije postavljeno')
}else{
    console.log(ime)
}

// falsy broj: 0, NaN, undefined, null
//falsy string: '', undefined,null
//falsy objekt: null, undefined

const b=Number('aaaaa')
console.log(b)

if(!b){
    console.log('Niste unijeli broj')
}

//truly
const x=12
if(x){ //zaboravio staviti >=18
    console.log('Punoljetan je')
}