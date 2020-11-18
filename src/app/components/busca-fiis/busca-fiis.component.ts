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

  fiis: string[] = [];
  constructor(private fiiService: FiiService) {

  }

  ngOnInit(): void {

    this.fiiService.getFiis("any").subscribe(fiis => {
      this.fiis = fiis.map(fii => fii.code);
      console.log(this.fiis);
    });

  }

}
