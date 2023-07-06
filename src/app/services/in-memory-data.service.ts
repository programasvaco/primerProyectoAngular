import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroe } from '../models/heroe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Iron Man',
        activo: true,
        imageUrl: 'https://i.etsystatic.com/38881100/r/il/0d08bc/4642496341/il_570xN.4642496341_8mof.jpg',
        description: 'Tony Stark, también conocido como Iron Man, es un multimillonario genio de la tecnología que construye un traje de alta tecnología para luchar contra el crimen y proteger al mundo.',
        comicCompany: 'Marvel Comics'
      },
      {
        id: 12,
        name: 'Spider-Man',
        activo: true,
        imageUrl: 'https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/spiderman1.png?fit=800%2C450&ssl=1',
        description: 'Peter Parker, alias Spider-Man, es un estudiante de secundaria que adquiere habilidades arácnidas después de ser mordido por una araña radiactiva. Utiliza sus poderes para proteger Nueva York de los villanos.',
        comicCompany: 'Marvel Comics'
      },
      {
        id: 13,
        name: 'Hulk',
        activo: true,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbFYS9sRNkyIzJgf0Jq5r7Sf9lBWm4M0nuSETSXwtcxsLhTuIQnf25wz7ZOaufoypAJM&usqp=CAU',
        description: 'Bruce Banner, conocido como Hulk, es un científico brillante que se transforma en un monstruo verde y poderoso cuando experimenta emociones intensas. Hulk posee una fuerza descomunal y es casi invulnerable.',
        comicCompany: 'Marvel Comics'
      },
      {
        id: 14,
        name: 'Thor',
        activo: true,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPNdn2J0Lzyx0vdEw7G3q2u_yyXjUqHI9GAkzjg6MNt9X6U_E-RaKGz9mnqlDoONDS-M&usqp=CAU',
        description: 'Thor es el dios del trueno en la mitología nórdica y un miembro destacado de los Avengers. Posee un martillo mágico llamado Mjolnir y tiene habilidades divinas, como controlar los rayos y volar.',
        comicCompany: 'Marvel Comics'
      },
      {
        id: 15,
        name: 'Black Widow',
        activo: false,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPmw4-Yh79AraQ5WHpWVMs9l_uUzXAHewtgqp82oWHRYFzsjtEC_PgBfIqNfNxbKEoTE&usqp=CAU',
        description: 'Natasha Romanoff, conocida como Black Widow, es una espía y asesina altamente entrenada. Es una experta en artes marciales y utiliza su habilidad para infiltrarse en organizaciones criminales y luchar contra el mal.',
        comicCompany: 'Marvel Comics'
      },
      {
        id: 16,
        name: 'Captain America',
        activo: true,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/CapAward.png',
        description: 'Steve Rogers, el Capitán América, es un super soldado creado durante la Segunda Guerra Mundial. Posee fuerza y agilidad sobrehumanas, así como un escudo indestructible que utiliza en la batalla.',
        comicCompany: 'Marvel Comics'
      },
      {
        id: 17,
        name: 'Black Panther',
        activo: true,
        imageUrl: 'https://i.etsystatic.com/14990737/r/il/cc82da/1917921302/il_fullxfull.1917921302_4ohw.jpg',
        description: 'TChalla, conocido como Black Panther, es el rey de Wakanda, una nación africana tecnológicamente avanzada. Posee habilidades mejoradas por el consumo de una hierba especial y utiliza un traje de vibranium para proteger a su pueblo.',
        comicCompany: 'Marvel Comics'
      }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Heroe[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}