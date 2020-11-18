import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-fiis',
  templateUrl: './busca-fiis.component.html',
  styleUrls: ['./busca-fiis.component.css']
})
export class BuscaFiisComponent implements OnInit {

  fiis: Fii[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
