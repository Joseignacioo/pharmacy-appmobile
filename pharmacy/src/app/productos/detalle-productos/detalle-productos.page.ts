import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SProductosService } from 'src/app/services/sproductos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage {

  producto = {
    id: 0,
    nombre: 'ibuprofeno',
    precio: '2000',
    stock: '200'
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
}
