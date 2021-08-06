import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItesComponent } from './ites.component';

describe('ItesComponent', () => {
  let component: ItesComponent;
  let fixture: ComponentFixture<ItesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
