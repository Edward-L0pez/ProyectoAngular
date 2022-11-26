import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosComponentComponent } from './contactos-component.component';

describe('ContactosComponentComponent', () => {
  let component: ContactosComponentComponent;
  let fixture: ComponentFixture<ContactosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
