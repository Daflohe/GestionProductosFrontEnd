import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmProductoComponent } from './addm-producto.component';

describe('AddmProductoComponent', () => {
  let component: AddmProductoComponent;
  let fixture: ComponentFixture<AddmProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
