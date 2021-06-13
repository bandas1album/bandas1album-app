import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostAlbumComponent } from './card-post-album.component';

describe('CardPostAlbumComponent', () => {
  let component: CardPostAlbumComponent;
  let fixture: ComponentFixture<CardPostAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
