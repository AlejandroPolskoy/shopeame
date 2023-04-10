import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.scss']
})
export class CapituloComponent {
  @Input() title: string = "titulo";
  @Input() text: string = "lorem";
}
