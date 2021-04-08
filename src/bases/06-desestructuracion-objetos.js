//desestructuracion de arreglos

const foo = [1,2];

const [red, blue, yellow=10] = foo;

console.log(red)
console.log(blue)
console.log(yellow)
console.log(foo)


let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7



const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

const [x, ...c]= [1,2,3,4,5] 

console.log(x)
console.log(c)

const user = {
    name: 'phils',
    lastname: 'garcia'
}

const {name, lastname} = user;

console.log(user)
console.log(name)
console.log(lastname)

let unoA, dosB;

({unoA, dosB} = {unoA: 10, dosB: 20})

console.log(unoA)
console.log(dosB)

let key = 'z';
let {[key]: foobar} = {p: 'pvar', z: 'bar', x: 'xvar'}
console.log(foobar)

const props = [
    {id: 1, firstName: 'phils'},
    {id: 2, firstName: 'phils2'},
    {id: 3, firstName: 'phils3'}
]

const [{firstName}, ...allName] = props;

console.log(firstName)
console.log(allName)


const persona = {
    name: 'phils',
    lastname: 'garcia',
    age: 50
}
const personContext = ({name,lastname, age, size = 'M'}) => {
    console.log(lastname, age, size);
    return {
        nombre: name,
        anios: age,
        latLong: {
            lat: 12.12313,
            long: -23.1312
        }

    }
};

const {nombre: nombreHero, anios: anioHero, latLong: {lat}} = personContext(persona);

console.log(nombreHero)
console.log(anioHero)
console.log(lat)