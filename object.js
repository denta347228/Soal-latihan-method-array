let carInova = {
    "brand": "toyota",
    "year": "2024",
    "type": "G",
    "color": "black",
    "isgasoline": true,
    "cc": 2000,
    "transmation": "matic",
    listspeaker: ["bose", "venom", "jbl"],
    typeoption: [

        {
            type: "v",
            price: 2000000
        },

        {
            type: "G",
            price: 3000000
        },

        {
            type: "x",
            price: 1000000
        },

        {
            type: "hybrid",
            price: 5000000
        },
        {
            type: "GR",
            price: 4000000
        }

    ],
    seatType: {
        material: {
            leather: {
                type: ["horse", "frog"],
                since: 1800
            }
        }
    }
}

// let {transmation : transmationInova, brand :brandInova} = res

carInova.seatType.material.leather.type = ["COW", "Frog"]

// let danta = carInova.seatType.material.leather.type.push("cow");

// console.log(carInova);

// console.log(JSON.stringify(carInova));

// for (const key in carInova) {
//     // console.log(key, "==>this key");
// }

// const selectLeather = "leather"
// let tempAnother = carInova["seatType"]["material"][selectLeather].type[0]
// console.log(tempAnother);

// let another = carInova["transmation"]
// console.log(another);
// console.log(carInova.typeoption[4]);
// console.log(carInova.listspeaker[1]);

function greeting(inputUser) {
    console.log("hello my name is " + inputUser)
}
greeting("danta");

const greeting2 = (inputUser) => {
    console.log("hello my name is " + inputUser);
}
greeting2("arif");

let collectionAge = [20, 23, 28, 30]
let result = collectionAge.filter(el => el > 20)
console.log(result);

// console.log (this);

let person = {
    name: "Anisa",
    age: 25,
    increment: function () {
        this.age += 1
    }
}

person.increment()
console.log(person);


let goingSuperMarket = (uang, merkBelanja, hargaMerk, callback) => {

    if (uang > hargaMerk) {
        let kembalianUang = uang - hargaMerk
        console.log("berhasil Beli" + merkBelanja);
        callback(kembalianUang)

    }


}

let belanja = (userMoney) => {

    goingSuperMarket(userMoney, "shampoo", 20000, (uang) => {
        console.log(uang, "==>FINAL");

    })

}

belanja(100000);