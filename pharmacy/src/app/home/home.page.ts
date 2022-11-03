import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Animation, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {
  productos: any = [];
  searchProductos: any[];
  constructor(
    private router: Router,
    private http: HttpClient,
    private animationCtrl: AnimationController
  ) {}
  ngAfterViewInit(){
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector('.title'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '0.2','1');
    animation.play();
    const animation2: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector('.square'))
      .fill('none')
      .iterations(Infinity)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);
    animation2.play();
    const animation3 = this.animationCtrl
        .create()
        .addElement(document.querySelector('.animation3'))
        .duration(5000)
        .afterClearStyles(['opacity'])
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.5)' },
          { offset: 1, transform: 'scale(1)' }
        ]);
      animation3.play();

  }
  ngOnInit() {
    this.getUsers().subscribe( res => {
      console.log('Res', res);
      this.productos = res;
    });
  }
  getUsers(){
    return this.http
    .get('assets/files/productos.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }
  searchProducto(event){
    const text = event.target.value;
    this.searchProductos = this.productos;
    // eslint-disable-next-line eqeqeq
    if(text && text.trim() != ''){
      // eslint-disable-next-line max-len
      this.searchProductos = this.searchProductos.filter((productos: any)=>(productos.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1 ));
    }
  }
}

