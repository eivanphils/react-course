import heroes, {owners, user} from '../data/heroes';

// console.log(owners)
// console.log(user)
// console.log(user)
// console.log(heroes)

export const getHeroesById = (id) => heroes.find(hero => hero.id === id);

// console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'))
// console.log(getHeroesByOwner('Marvel'))