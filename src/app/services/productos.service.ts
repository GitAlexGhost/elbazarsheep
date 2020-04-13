import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  cargando = true;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://ventasalex-362ab.firebaseio.com/productos_idx.json')
    .subscribe((resp: any[]) => {
      console.log('Servicio de productos ');
      setTimeout(() => {
        this.cargando = false;
      }, 3000);
      setTimeout(() => {
        this.productos = resp;
      }, 3001);
      console.log(resp);
    });
  }
}
