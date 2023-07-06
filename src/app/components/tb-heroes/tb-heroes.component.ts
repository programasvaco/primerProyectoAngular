import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Heroe } from 'src/app/models/heroe';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-tb-heroes',
  templateUrl: './tb-heroes.component.html',
  styleUrls: ['./tb-heroes.component.css']  
})
export class TbHeroesComponent implements OnInit  {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'activo', 'acciones', 'detalle'];
  dataSource:  any;
  listHeroes: any;
  //MatTableDataSource<Heroe>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    //this.setDataSourceAttributes();
    }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) set matSort(mt: MatSort) {
    this.sort = mt;
    //this.setDataSourceAttributes();    
  }

  constructor(
    private heroService: HeroService
  ) { } 
  
  ngOnInit() {
    this.getHeroes();
    
  }

  async getHeroes(){
    await this.getHeroesPromise().then(result => {
      this.listHeroes = result;
    });
    this.dataSource = new MatTableDataSource(this.listHeroes);
    this.setDataSourceAttributes();
  }

  async getHeroesPromise(){
    return await this.heroService.getHeroes().toPromise();
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(hero: Heroe): void {
    this.listHeroes = this.listHeroes.filter((h: Heroe) => h !== hero);
    this.dataSource = new MatTableDataSource(this.listHeroes);
    this.heroService.deleteHero(hero).subscribe();
  }
}
