import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
//import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  heroes:Heroe[];
  // selectedHero!: Heroe;
  constructor(
    private heroService: HeroService, 
    private mensajeService: MensajeService) { }

  ngOnInit() { 
    this.getHeroes();
    //console.log(this.heroes);
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(respuheroes=>{
      this.heroes = respuheroes;
      console.log(this.heroes);
    });
  }

  add(nombre: string, imageUrl: string): void {
    let name = nombre.trim();
    imageUrl = imageUrl.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, imageUrl } as Heroe)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Heroe): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // onSelect(hero: Heroe): void {        
  //   this.selectedHero = hero;
  //   this.mensajeService.add('Detalle de: ' + this.selectedHero.name);
  //   //console.log(this.selectedHero)
  // }
}
