import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Iniciar Sesión', url: 'login', icon: 'person' },
    { title: 'Stock Productos', url: 'listar-productos', icon: 'list' },
    


    // { title: 'Agregar', url: 'agregar-productos', icon: 'list' },
    // { title: 'Eliminar', url: 'eliminar-productos', icon: 'list' },
    // { title: 'Actualizar', url: 'modificar-productos', icon: 'list' },
    // { title: 'Detalle', url: 'detalle-productos', icon: 'list' },


  ];
  public labels = [];
  constructor() {}
}
