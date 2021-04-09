import heroes, {owners, user} from './heroes';

console.log(owners)
console.log(user)
console.log(user)
console.log(heroes)

const getHeroesById = (id) => heroes.find(hero => hero.id === id);

console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'))
console.log(getHeroesByOwner('Marvel'))