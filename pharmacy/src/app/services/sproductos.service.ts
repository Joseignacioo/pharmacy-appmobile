import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interfaces/iproducto';
import { IProductos } from '../interfaces/iproductos';

@Injectable({
  providedIn: 'root'
})
export class SProductosService {

  constructor(private http: HttpClient) { }

  listarProductos(): Observable<IProductos>{
    return this.http.get<IProductos>(`${environment.apiURL}/productos`);
  }
  crearProducto(newProducto: IProducto): Observable<IProducto>{
    return this.http.post<IProducto>(`${environment.apiURL}/productos`, newProducto);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  getProductoByID(id: Number): Observable<IProductos>{
    return this.http.get<IProductos>(`${environment.apiURL}/productos/?id=${id}`);
  }
  actualizarProducto(producto: any): Observable<IProductos>{
    return this.http.put<IProductos>(`${environment.apiURL}/productos/${producto.id}`, producto);
  }
  eliminarProducto(producto: any): Observable<IProductos>{
    return this.http.delete<IProductos>(`${environment.apiURL}/productos/${producto.id}`);
  }
}
