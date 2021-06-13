import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCardPostAlbumComponent } from './loading-card-post-album.component';

describe('LoadingCardPostAlbumComponent', () => {
  let component: LoadingCardPostAlbumComponent;
  let fixture: ComponentFixture<LoadingCardPostAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingCardPostAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCardPostAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
