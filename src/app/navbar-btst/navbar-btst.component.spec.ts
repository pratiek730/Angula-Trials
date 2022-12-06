import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBtstComponent } from './navbar-btst.component';

describe('NavbarBtstComponent', () => {
  let component: NavbarBtstComponent;
  let fixture: ComponentFixture<NavbarBtstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBtstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBtstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
