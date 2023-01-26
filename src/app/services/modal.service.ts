import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

   titulo="";
 accion=new BehaviorSubject("");
  element;
  constructor() { }

}
