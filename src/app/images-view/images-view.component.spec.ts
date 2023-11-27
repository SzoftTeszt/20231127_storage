import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesViewComponent } from './images-view.component';

describe('ImagesViewComponent', () => {
  let component: ImagesViewComponent;
  let fixture: ComponentFixture<ImagesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesViewComponent]
    });
    fixture = TestBed.createComponent(ImagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
