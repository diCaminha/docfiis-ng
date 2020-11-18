import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaFiisComponent } from './busca-fiis.component';

describe('BuscaFiisComponent', () => {
  let component: BuscaFiisComponent;
  let fixture: ComponentFixture<BuscaFiisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaFiisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaFiisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
