import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent {
constructor(public modalservice: ModalService) { }
titulo="";
accion="";
element="";
  ngOnInit(): void {
    this.titulo=this.modalservice.titulo,
    this.accion=this.modalservice.accion.value,
    this.element=this.modalservice.element
  }
}
