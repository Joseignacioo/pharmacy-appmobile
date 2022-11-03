import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SProductosService } from 'src/app/services/sproductos.service';

@Component({
  selector: 'app-eliminar-productos',
  templateUrl: './eliminar-productos.page.html',
  styleUrls: ['./eliminar-productos.page.scss'],
})
export class EliminarProductosPage{

  producto = {
    id: 0,
    nombre: '',
    precio: '',
    stock: ''
  };

  constructor(private productoServ: SProductosService, private router: Router) { }

  ionViewWillEnter(){
    this.getProductoByID(this.getIdFromURL());
  }

  getIdFromURL(){
    let url = this.router.url;
    let arr = url.split('/', 3);
    let id = parseInt(arr[2]);
    return id;
  };

  getProductoByID(productoID: Number){
    this.productoServ.getProductoByID(productoID).subscribe(
      (resp: any) => {
        this.producto = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          precio: resp[0].precio,
          stock: resp[0].stock
        };
      }
    );
  }
  eliminarProducto(){
    this.productoServ.eliminarProducto(this.producto).subscribe();
    this.router.navigateByUrl('/listar-productos');
  }

}
