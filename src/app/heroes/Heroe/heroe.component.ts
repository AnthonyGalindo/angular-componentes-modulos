import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe' ,
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    
  nombre:string = 'Iroman';
  edad:number = 43;

  
   get devolverNombre() : string {
    return this.nombre.toUpperCase();
  }


public set setNombre(v : string) {
    this.nombre = v;
}
public set setEdad(v : number) {
    this.edad = v;
}

  
  

 obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
 }

}