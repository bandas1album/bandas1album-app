import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderListAlbumsComponent } from './placeholder-list-albums.component';

describe('PlaceholderListAlbumsComponent', () => {
  let component: PlaceholderListAlbumsComponent;
  let fixture: ComponentFixture<PlaceholderListAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderListAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderListAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
