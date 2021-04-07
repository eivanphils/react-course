const persona = {
    nombre: 'phils',
    apellido: 'garcia',
    edad: 28,
    direccion: {
        calle: 'nicasio retamales',
        zip: 12313213,
        lat: 1231,
        lng: 13312
    }
};

const persona2 = {...persona};

persona2.nombre = 'jose';
console.log(persona)

console.log(persona2)