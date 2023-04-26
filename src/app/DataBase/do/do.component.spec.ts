import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOComponent } from './do.component';

describe('DOComponent', () => {
  let component: DOComponent;
  let fixture: ComponentFixture<DOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
