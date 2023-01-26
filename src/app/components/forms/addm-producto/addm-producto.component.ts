import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addm-producto',
  templateUrl: './addm-producto.component.html',
  styleUrls: ['./addm-producto.component.css']
})
export class AddmProductoComponent {

 constructor(private fb: FormBuilder,public modalservice:ModalService, public api:ApiService,  public router:Router,) {}
obj: any[];
get objetos(){
  return this.addressForm.get('objetos') as FormArray
}
addressForm = this.fb.group({
    objetos: this.fb.array([])
  });
OnSubmit(): void{
      if(this.addressForm.valid){
     console.log(this.objetos.value)
     
        this.api.postM(this.objetos.value)
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
agregarObj(){
  const objFormGroup = this.fb.group({
    nombre: [null, Validators.required],
    estado: [null, Validators.required],
    elaborado:[null, Validators.required],
  })
  this.objetos.push(objFormGroup);
}

back(){
  this.router.navigateByUrl("/Menu")
}
 estado = [
    {name: 'OK'},
    {name: 'MAL ESTADO'},
    
  ];
  elaboracion = [
    {name: 'MANO'},
    {name: 'MAQUINA'},
 
  ];

}
