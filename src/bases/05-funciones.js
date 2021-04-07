// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }
const saludar = (nombre) => {
    return `Hola ${nombre}`;
};
const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar('phils') );
console.log(saludar2('jose') );

const getUser = () => {
    return {
        uid: '123432',
        username: 'phils'
    }
};

const getUser2 = () =>
    ({
        uid: '123432',
        username: 'phils'
    });
    console.log(getUser());
    console.log(getUser2());

const getUsuarioActivo = (nombre) =>
    ({
        uid: '123432',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Ivan');
console.log(usuarioActivo)
console.log(usuarioActivo.username)