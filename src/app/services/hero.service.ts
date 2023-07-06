import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroe';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) { }
  
  /*getHeroes(): Observable<Heroe[]> {
    //this.mensajeService.add('HeroService: buscando heroes');
    return of(HEROES);
  }*/
  /** GET heroes from the server */
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('Buscando heroes')),
        catchError(this.handleError<Heroe[]>('getHeroes', []))
      );
  }

  /*getHero(id: number): Observable<Heroe | undefined> {
    // TODO: send the message _after_ fetching the hero
    //this.mensajeService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }*/

  getHero(id: number): Observable<Heroe> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Heroe>(url).pipe(
      tap(_ => this.log(`buscando heroe id=${id}`)),
      catchError(this.handleError<Heroe>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Heroe): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Actualizando heroe id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Heroe) => this.log(`agregando heroe w/ id=${newHero.id}`)),
      catchError(this.handleError<Heroe>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Heroe | number): Observable<Heroe> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Heroe>(url, this.httpOptions).pipe(
      tap(_ => this.log(`eliminando heroe id=${id}`)),
      catchError(this.handleError<Heroe>('deleteHero'))
    );
  }

  private log(message: string) {
    this.mensajeService.add(`HeroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
