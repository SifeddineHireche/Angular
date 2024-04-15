import { Component } from '@angular/core';

@Component ({
    selector:'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{
    public titulo: string ;
    public comentario: string;
    public year : number ;
    public mostrarPeliculas: boolean;
    constructor(){
        this.titulo = " Hola mundo soy ilyas ";
        this.comentario = "el que trabaja gratis y pone el culo todos los dias";
        this.year= 2021;
        this.mostrarPeliculas= true;
        console.log("Componenete mi componenete cargado");

    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}