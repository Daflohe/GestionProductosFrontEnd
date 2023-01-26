import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit{
  accion=""
  title=""
  addressForm = this.fb.group({
    name: [null, Validators.required],
    estado: [null, Validators.required],
    elaborado: [null, Validators.required],
  });

  hasUnitNumber = false;

  estado = [
    {name: 'OK'},
    {name: 'MAL ESTADO'},
    
  ];
  elaboracion = [
    {name: 'MANO'},
    {name: 'MAQUINA'},
 
  ];

  constructor(private fb: FormBuilder,public modalservice:ModalService, public api:ApiService) {}

  ngOnInit(): void {
    this.modalservice.accion.subscribe((res)=>{
      this.title=res;
      if(res=='Editar'){
        console.log(this.modalservice.element)
        this.addressForm.controls['name'].setValue(this.modalservice.element.nombre);
        this.addressForm.controls['estado'].setValue(this.modalservice.element.estado);
        this.addressForm.controls['elaborado'].setValue(this.modalservice.element.elaborado);
      }
    })

  }

  OnSubmit(){
    if(this.modalservice.accion.value=="Agregar"){
      if(this.addressForm.valid){
        const producto={
          nombre: this.addressForm.get('name')?.value,
          estado: this.addressForm.get('estado')?.value,
         elaborado: this.addressForm.get('elaborado')?.value,
        }
        this.api.post(producto)
       Swal.fire({
         title: 'Producto creado correctamente',
         icon: 'success',
         showCancelButton: false,
         cancelButtonColor: '#d33',
         confirmButtonText: 'ok',
         cancelButtonText: 'Cancelar'
        }).then((result) => {   
         if (result.isConfirmed) {     
            window.location.reload()
          }
        })
      }
    }


     if(this.modalservice.accion.value=="Editar"){
      if(this.addressForm.valid){
        const producto={
          id:this.modalservice.element.id,
          nombre: this.addressForm.get('name')?.value,
          estado: this.addressForm.get('estado')?.value,
          elaborado: this.addressForm.get('elaborado')?.value,
        }

        this.api.update(producto,this.modalservice.element.id)
        Swal.fire({
         title: 'Producto editado correctamente',
         icon: 'success',
         showCancelButton: false,
         cancelButtonColor: '#d33',
         confirmButtonText: 'ok',
         cancelButtonText: 'Cancelar'
        }).then((result) => {   
      if (result.isConfirmed) {     
       
        window.location.reload()
      }
    })
      }

    }


  }

}

