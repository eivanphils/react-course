const personajes = ['goku', 'vegeta', 'trunks'];

const [personaje1, ,personaje3] = personajes;

console.log(personaje1)
// console.log(p2)
console.log(personaje3)

const retornaArreglo = () => {
    return ['ABC', 1234];
}

const [letras, numeros] = retornaArreglo();

console.log(letras)
console.log(numeros)

const arrUseState = (valor) => {
    return [valor, ()=> { console.log('Hola mundo')}]
}

const [nombre, funcHolaMundo]  = arrUseState('Phils');

console.log(nombre)
console.log(funcHolaMundo())