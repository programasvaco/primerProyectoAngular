import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lstheroes: Heroe[];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(){
    this.heroService.getHeroes().subscribe(respuesta => {
      this.lstheroes = respuesta.slice(1, 5);
    } )
  }
}
