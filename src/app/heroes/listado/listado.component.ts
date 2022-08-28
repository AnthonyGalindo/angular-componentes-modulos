import { query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroeBorrado: string = '' ;
  heroes: string[] = [ 'Lufi','Soro','Sangi','Nami','Choper','Uso','Franklin' ];
 
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}


