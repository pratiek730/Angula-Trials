import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGifComponent } from './text-gif.component';

describe('TextGifComponent', () => {
  let component: TextGifComponent;
  let fixture: ComponentFixture<TextGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
