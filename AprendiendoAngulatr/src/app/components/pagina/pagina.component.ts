import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {


  constructor(private _route : ActivatedRoute, private _router: Router) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) =>{
      
    })
  }
  reedireccion(){
    this._router.navigate(['/formulario']);
  }

}
