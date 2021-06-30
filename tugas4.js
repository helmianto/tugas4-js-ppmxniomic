const paijoTall = 160;
const komengTall = 165;
const sutisnaTall = 189;

function sortTall(personOne, personTwo, personThree){
    let newPersonOne, newPersonTwo, newPersonThree
    if(personOne > personTwo && personOne > personThree){
        if (personTwo > personThree) {
            newPersonThree = personThree;
            newPersonTwo = personTwo;
            newPersonOne = personOne;
            console.log('Tertinggi Pertama: ', newPersonOne);
            console.log('Tertinggi Kedua: ', newPersonTwo);
            console.log('Tertinggi Ketiga: ', newPersonThree);
        } else {
            newPersonThree = personTwo;
            newPersonTwo = personThree;
            newPersonOne = personOne;
            console.log('Tertinggi Pertama: ', newPersonOne);
            console.log('Tertinggi Kedua: ', newPersonTwo);
            console.log('Tertinggi Ketiga: ', newPersonThree);
        }
    } else if (personTwo > personOne && personTwo > personThree) {
        if(personOne > personThree){
            newPersonThree = personThree;
            newPersonTwo = personOne;
            newPersonOne = personTwo;
            console.log('Tertinggi Pertama: ', newPersonOne);
            console.log('Tertinggi Kedua: ', newPersonTwo);
            console.log('Tertinggi Ketiga: ', newPersonThree);
        } else {
            newPersonThree = personOne;
            newPersonTwo = personThree;
            newPersonOne = personTwo;
            console.log('Tertinggi Pertama: ', newPersonOne);
            console.log('Tertinggi Kedua: ', newPersonTwo);
            console.log('Tertinggi Ketiga: ', newPersonThree);
        }
    } else if (personThree > personOne && personThree > personTwo){
        if(personOne > personTwo) {
            newPersonThree = personTwo;
            newPersonTwo = personOne;
            newPersonOne = personThree;
            console.log('Tertinggi Pertama: ', newPersonOne);
            console.log('Tertinggi Kedua: ', newPersonTwo);
            console.log('Tertinggi Ketiga: ', newPersonThree);
        } else {
            newPersonThree = personOne;
            newPersonTwo = personTwo;
            newPersonOne = personThree;
            console.log('Tertinggi Pertama: ', newPersonOne);
            console.log('Tertinggi Kedua: ', newPersonTwo);
            console.log('Tertinggi Ketiga: ', newPersonThree);
        }
    }
}

sortTall(paijoTall, komengTall, sutisnaTall);