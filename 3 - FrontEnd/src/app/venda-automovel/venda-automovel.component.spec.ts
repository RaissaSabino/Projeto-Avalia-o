import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaAutomovelComponent } from './venda-automovel.component';

describe('VendaAutomovelComponent', () => {
  let component: VendaAutomovelComponent;
  let fixture: ComponentFixture<VendaAutomovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaAutomovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendaAutomovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
