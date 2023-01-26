import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  constructor(public api:ApiService,public modalservice: ModalService,public dialog: MatDialog,  public router:Router,) {
    this.dataSource = new MatTableDataSource;
  }
 
  public displayedColumns: string[]=[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  title="";

  ngOnInit():void{
    this.get();

  this.modalservice.accion.subscribe((res)=>{
    this.title=res;
  if(res=='Editar'){}
  })
  }

   public async get(){
    await this.api.getAll().then((res)=>{
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }
      this.dataSource.data=res;
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    });
  }

  loadTable(data:any[]){
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Acciones")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   openDialogEdit(element:any){
    this.modalservice.titulo="producto",
    this.modalservice.accion.next("Editar"),
    this.modalservice.element=element,

    this.dialog.open(ModalTemplateComponent,{
       width:'500px',
      height:'400px'

    });
  }

  eliminar(element){
    
    Swal.fire({
      title: '¿Estás seguro de eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
   }).then((result) => {   
      if (result.isConfirmed) {     
        this.api.delete(element.id);
        window.location.reload()
      }
    })
  }

  agregarProducto(){
    this.modalservice.titulo="producto",
    this.modalservice.accion.next("Agregar"),
    this.dialog.open(ModalTemplateComponent,{
      width:'500px',
      height:'400px'

    });
  }

  
  agregarProductoM(){
     this.modalservice.titulo="productos",
    this.modalservice.accion.next("Agregar"),
    this.dialog.open(ModalTemplateComponent,{
      width:'1000px',
      height:'1000px'

    });
    }
  


}
