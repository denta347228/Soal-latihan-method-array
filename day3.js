const kijangInovaG = {
    "type": "G",
    color: "black",
    cc: 2000
}
const kijangInovaX = {
    "type": "x",
    color: "black",
    cc: 1799
}

class mobil {
    constructor(type, color, cc) {
        this.type = type
        this.color = color
        this.cc = cc

    }
    printTypeCar() {
        console.log(`this is kijang Inova ${this.type}, and the colour is ${this.color}, and cc information ${this.cc}`)
    }
}

const kijangInovaG2 = new mobil('G', "black", 2000)
kijangInovaG2.printTypeCar()