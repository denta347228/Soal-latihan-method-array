function makeAllCaps(Input_data) {
    return new Promise((resolve, reject) => {
        // Periksa apakah array hanya berisi string
        if (Input_data.every(word => typeof word === 'string')) {
            // Ubah semua elemen array menjadi huruf kapital
            const capitalizedWords = Input_data.map(data => data.toUpperCase());
            resolve(capitalizedWords);
        } else {
            reject('Err');
        }
    });
}

function sortWords(Input_data) {
    return new Promise((resolve, reject) => {

        if (Input_data.every(data => typeof data === 'string')) {

            const tempdata = Input_data.sort();
            resolve(tempdata);
        } else {
            reject('Err');
        }
    });
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });