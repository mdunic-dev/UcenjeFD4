const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    rezultat.innerHTML = ''

    // idem pokupiti vrijednosti koje je unio korisnik (String)
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {
        // počinje 1. zadatak
        if (!aString) { //falsy, aString===''
            rezultat.innerHTML = 'Unesite vrijednost A'
            rezultat.style.color = 'red'
            return // prekida izvođenje click funkcije - short curcuiting
        }

        const a = Number(aString)

        if (!a) { // falsy, a je NaN
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da mi je a broj

        if (!bString) {
            rezultat.innerHTML = 'Unesite vrijednost B'
            rezultat.style.color = 'red'
            return
        }

        const b = Number(bString)

        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da su a i b brojevi

        //rezultat.innerHTML = a > b ? a : b
        if (a === b) {
            rezultat.innerHTML = 'Jednaki su'
        } else if (a > b) {
            rezultat.innerHTML = 'Najveći je pod A: ' + a
        } else {
            rezultat.innerHTML = 'Najveći je pod B: ' + b
        }
        rezultat.style.color = 'green'


        // završava prvi zadatak
    }
    // počinje drugi zadatak
    if (zadatak === '2') {
        if (!aString) { //falsy, aString===''
            rezultat.innerHTML = 'Unesite vrijednost A'
            rezultat.style.color = 'red'
            return // prekida izvođenje click funkcije - short curcuiting
        }

        const a = Number(aString)

        if (!a) { // falsy, a je NaN
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da mi je a broj

        if (!bString) {
            rezultat.innerHTML = 'Unesite vrijednost B'
            rezultat.style.color = 'red'
            return
        }

        const b = Number(bString)

        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        if (!cString) {
            rezultat.innerHTML = 'Unesite vrijednost C'
            rezultat.style.color = 'red'
            return
        }

        const c = Number(cString)

        if (!c) {
            rezultat.innerHTML = 'C nije broj'
            rezultat.style.color = 'red'
            return
        }



        // ovdje sam 100% siguran da su a i b i c brojevi

        if (a === b && b === c) {
            rezultat.innerHTML = 'Jednaki su svi brojevi'
        } else if (a >= b && a >= c) {
            rezultat.innerHTML = 'Najveći je pod A: ' + a
        } else if (b >= a && b >= c) {
            rezultat.innerHTML = 'Najveći je pod B: ' + b
        } else {
            rezultat.innerHTML = 'Najveći je pod C: ' + c
        }
        rezultat.style.color = 'green'


    }
    // završava drugi zadatak


    // počinje treći zadatak
    if (zadatak === '3') {
        if (!aString) { //falsy, aString===''
            rezultat.innerHTML = 'Unesite vrijednost A'
            rezultat.style.color = 'red'
            return // prekida izvođenje click funkcije - short curcuiting
        }

        const a = Number(aString)

        if (!a) { // falsy, a je NaN
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da mi je a broj

        if (!bString) {
            rezultat.innerHTML = 'Unesite vrijednost B'
            rezultat.style.color = 'red'
            return
        }

        const b = Number(bString)

        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        if (!cString) {
            rezultat.innerHTML = 'Unesite vrijednost C'
            rezultat.style.color = 'red'
            return
        }

        const c = Number(cString)

        if (!c) {
            rezultat.innerHTML = 'C nije broj'
            rezultat.style.color = 'red'
            return
        }

        if (!dString) {
            rezultat.innerHTML = 'Unesite vrijednost D'
            rezultat.style.color = 'red'
            return
        }

        const d = Number(dString)

        if (!d) {
            rezultat.innerHTML = 'D nije broj'
            rezultat.style.color = 'red'
            return
        }


        // ovdje sam 100% siguran da su a i b i c brojevi

        if (a === b && b === c && c === d) {
            rezultat.innerHTML = 'Svi unosi su jednaki';
        } else if (a >= b && a >= c && a >= d) {
            rezultat.innerHTML = 'Najveći je pod A: ' + a
        } else if (b >= a && b >= c && b >= d) {
            rezultat.innerHTML = 'Najveći je pod B: ' + b
        } else if (c >= a && c >= b && c >= d) {
            rezultat.innerHTML = 'Najveći je pod C: ' + c
        } else {
            rezultat.innerHTML = 'Najveći je pod D: ' + d
        }
        rezultat.style.color = 'green'


    }
    // završava treći zadatak

    //završava click funkcija
})