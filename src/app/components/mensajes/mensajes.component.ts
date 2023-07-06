import { Component } from '@angular/core';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  constructor(public mensajeService: MensajeService) {}

}
