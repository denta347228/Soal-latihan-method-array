// class HomePage {
//     constructor(name) {
//         this.name = name;
//     }

//     printName() {
//         console.log(`welcome ${this.name}`); // Gunakan backticks untuk template literal
//     }
// }

// class Navbar extends HomePage {
//     constructor(name, isLogin) {
//         super(name);
//         this.isLogin = isLogin; // Perbaikan: isLogin harus langsung di-assign
//     }

//     cekLogin() {
//         if (this.isLogin) {
//             console.log(`${this.name} is logged in`);
//         } else {
//             console.log(`${this.name} is not logged in`);
//         }
//     }
// }

// const renderNavbar = new Navbar("denta", true);
// renderNavbar.printName();
// renderNavbar.cekLogin();


// const makanSiang = () => {
//     return new Promise((resolve, reject) => {
//         const canJoinLunch = true
//         if (canJoinLunch) {
//             resolve("Aku Akan datang di makan siang !")
//         } else {
//             reject("maaf aku gak bisa hadir")
//         }

//     })
// }

// makanSiang()
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log((err));
//     });

// console.log("1");
// setTimeout(() => {
//     console.log("2")
// }, 3000)
// console.log("3")
// console.log("4")




// const getApiUser = () => {
//     return new Promise((resolve, reject) => {
//         fetch("https://jsonplaceholder.typingcode.com/users")
//             .the(res => res.json())
//             .then(data => {
//                 resolve(data)
//             })
//             .catch(err => {
//                 reject(err);
//             })

//     })
// getApiUser()
// .then(data =>{
//     console.log(data,'ini line 65');
// })
// }

// huruf besar huruf kecil

const manipulateToLowerCase = (inputUser) => {
    return new Promise((resolve, reject) => {
        const validatetype = inputUser.every(el => typeof el === "string"); // perbaikan typo di 'every'

        if (validatetype) {
            const result = inputUser.map(el => el.toLowerCase());
            resolve(result);
        } else {
            reject("input is wrong");
        }
    });
};

const findData = (inputData) => {
    return new Promise((resolve, reject) => {
        const result = inputData.filter(el => el === "apel"); // cari "apel" dengan huruf kecil

        if (result.length > 0) {
            resolve(result);
        } else {
            reject("Gaada boy buahnya");
        }
    });
};

const fruits = ["Apel", "Pisang", "Melon", "JERuk"];

manipulateToLowerCase(fruits)
    .then(data => {
        console.log(data, " <<<< ini hasil lowerCase");
        return findData(data);
    })
    .then(data2 => {
        console.log(data2, " <<<< ini hasil buat findData");
    })
    .catch(err => {
        console.log(err);
    });

const getApiuser2 = async () => {

    try {
        const result = await fetch("https://jsonplaceholder.typingcode.com/users")
        const resultData = await result.json()
        console.log(resultData);

    } catch (error) {
        console.log(error, "==>eror")
    }

}
getApiuser2()