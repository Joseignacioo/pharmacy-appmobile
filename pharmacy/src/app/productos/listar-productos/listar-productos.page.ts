import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SProductosService } from 'src/app/services/sproductos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage {

  productos = [];

  constructor(private productosServ: SProductosService, private loadingCtr: LoadingController) { }

  ionViewWillEnter(){
    this.loadProductos();
  }

  async loadProductos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtr.create({
        message: 'Cargando...',
        spinner: 'bubbles'
      }
    );
    await loading.present();
    this.productosServ.listarProductos().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp);
        this.productos = JSON.parse(listString);
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
        loading.dismiss();
      }
    );
  }
}
