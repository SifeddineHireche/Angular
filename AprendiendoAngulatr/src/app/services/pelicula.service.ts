import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula [];
    constructor(){
        this.peliculas=[
            new Pelicula( "Spiderman4",2009, 'https://i.blogs.es/a3025e/spider-man-3/1366_521.jpeg'),
            new Pelicula( "Los vengadores",2012, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-poster-1556056595.jpg?crop=1.00xw:0.352xh;0,0.131xh&resize=1200:*'),
            new Pelicula( "Batman vs Spiderman",2018, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/batman-v-superman-el-amanecer-de-la-justicia-2016-ben-affleck-y-henry-cavill-1558006115.jpg?crop=1xw:0.8880994671403197xh;center,top&resize=1200:*'),
            new Pelicula( "Batman vs Spiderman",2020, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/batman-v-superman-el-amanecer-de-la-justicia-2016-ben-affleck-y-henry-cavill-1558006115.jpg?crop=1xw:0.8880994671403197xh;center,top&resize=1200:*')
           
           ];
    }

    holaMundo(){
        return "Hola Mundo desde el servicio";
    };

    getPeliculas(){
        return this.peliculas;
    }


}