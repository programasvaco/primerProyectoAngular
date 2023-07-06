import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Heroe } from 'src/app/models/heroe';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() 
  heroSel: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,

    private location: Location ) { }

  ngOnInit() {
    this.getHero();
    // console.log(this.heroSel);
  }

  save() {
    this.heroService.updateHero(this.heroSel).subscribe(() => this.goBack());
    }

  getHero(): void {
    const param=this.route.snapshot.paramMap.get('id');
    const id = param?+param:0;
    // const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.heroSel=hero);
  }

  goBack(): void {
    this.location.back();
  }
}
