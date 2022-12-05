import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAreasComponent } from './detalhes-areas.component';

describe('DetalhesAreasComponent', () => {
  let component: DetalhesAreasComponent;
  let fixture: ComponentFixture<DetalhesAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
