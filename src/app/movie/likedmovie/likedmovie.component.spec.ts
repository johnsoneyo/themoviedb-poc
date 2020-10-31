import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedmovieComponent } from './likedmovie.component';

describe('LikedmovieComponent', () => {
  let component: LikedmovieComponent;
  let fixture: ComponentFixture<LikedmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
