import { getHeroesById } from "./08-import-exports";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('dos segundos despues')
//         const heroe = getHeroesById(2);
//         console.log(heroe);
//         // reject('nose pudo encontrart el heroe');
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('llamar then de la promesa', heroe);
// }).catch( err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return  new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroesById(id);
            
            if(heroe) {                
                resolve(heroe);
            } else {
                reject('nose pudo encontrart el heroe');
            }
        }, 2000);
    });
    

}

getHeroeByIdAsync(1)
.then(console.log)
.catch( console.warn);