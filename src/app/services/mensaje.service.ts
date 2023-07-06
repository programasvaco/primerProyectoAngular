import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  ltsmsj: string[] = [];

  constructor() { }

  add(txtmsj: string) {    
    this.ltsmsj.push(txtmsj);   
  }

  clear() {
    this.ltsmsj = [];
  }
  
}
