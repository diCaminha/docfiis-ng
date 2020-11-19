import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Fii } from 'src/app/models/fii';
import { FiiService } from 'src/app/service/fii.service';

@Component({
  selector: 'app-busca-fiis',
  templateUrl: './busca-fiis.component.html',
  styleUrls: ['./busca-fiis.component.css']
})
export class BuscaFiisComponent implements OnInit {

  inputCodigo:string = "";
  fiis: Fii[] = [];
  constructor(private fiiService: FiiService) { }

  ngOnInit(): void {
    this.fiiService.getFiis("").subscribe(fiis => this.fiis = fiis);
  }

  filtrarPorCodigo() {
    this.fiis = this.fiis.filter(fii => fii.code === this.inputCodigo.toUpperCase());
  }

}
