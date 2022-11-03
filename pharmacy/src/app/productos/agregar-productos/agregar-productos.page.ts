import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { SProductosService } from 'src/app/services/sproductos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {

  newProducto: IProducto = {
    nombre: '',
    precio: '',
    stock: ''
  };

  constructor(private productoServ: SProductosService, private router: Router) { }

  ngOnInit() {
  }

  crearProducto(){
    this.productoServ.crearProducto(this.newProducto).subscribe();
    this.router.navigateByUrl('/listar-productos');
  }
}
