import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input() usuarios: Array<Object>;
  @Output() selecionado: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecionando(usuario: Object) {
    this.selecionado.emit(usuario);
  }

}
