import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

url = "http://localhost:8080/api/v1/productos";

 public async getAll() {
    var DataResponse:any;
    await this.http.get(this.url).toPromise().then((res)=>{
      DataResponse = res;
    })
    return DataResponse;
  }

 post(obj:object) {
    return this.http.post(this.url,obj).subscribe((res)=>
    console.log(res)
    )
  }

 postM(obj:object[]) {
    return this.http.post(this.url+"M",obj).subscribe((res)=>
    console.log(res)
    )
  }
  
  update(obj:object,id:number) {
    return this.http.put(this.url+"/"+id,obj).subscribe((res)=>
    console.log(res))
  }

  delete(id:number) {
    return this.http.delete(this.url+"/"+id).subscribe((res)=>
    console.log(res))
  }
 
}