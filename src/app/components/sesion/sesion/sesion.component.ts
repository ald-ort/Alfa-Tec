import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  public pag: boolean = true;
  log: string = "sel";
  check: string = "des";

  constructor() { }

  ngOnInit(): void {
  }

  pagina(pag) {
    this.pag = pag;
    if (pag == true) {
      this.log = "sel";
      this.check = "des";
    } else {
      this.log = "des";
      this.check = "sel";
    }
    
  }

}
