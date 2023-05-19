//add four images using js

document.write("<img src= './image/image1.jpg'>")
document.write("<img src= './image/image2.jpg'>")
document.write("<img src= './image/image3.jpg'>")
document.write("<img src= './image/image3 - Copy.jpg'>")


// get current date 
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `<h1>la date d’aujourd’hui : ${day}/${month}/${year}</h1>`;
document.write(currentDate)


////////////////
//  ex 2

let euro = document.getElementById("euro");
let dirham = document.getElementById("dirham");

euro.onkeyup = () => {
    dirham.value = euro.value * 10.98;
}
dirham.onkeyup = () => {
    euro.value = dirham.value / 10.98;
}



/////5 
function getNumberOfDays() {
    var monthNumber;

    do {
        monthNumber = parseInt(prompt("Veuillez saisir le numéro d'un mois (entre 1 et 12) :"));
    } while (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12);

    var numberOfDays;

    switch (monthNumber) {
        case 2:
            numberOfDays = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numberOfDays = 30;
            break;
        default:
            numberOfDays = 31;
            break;
    }

    alert("Le mois numéro " + monthNumber + " a " + numberOfDays + " jours.");
}

getNumberOfDays();
