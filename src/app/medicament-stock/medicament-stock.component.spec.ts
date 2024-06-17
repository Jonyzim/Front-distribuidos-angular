import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentStockComponent } from './medicament-stock.component';

describe('HomeComponent', () => {
  let component: MedicamentStockComponent;
  let fixture: ComponentFixture<MedicamentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
