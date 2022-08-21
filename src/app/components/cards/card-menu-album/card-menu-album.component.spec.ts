import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuAlbumComponent } from './card-menu-album.component';

describe('CardMenuAlbumComponent', () => {
  let component: CardMenuAlbumComponent;
  let fixture: ComponentFixture<CardMenuAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenuAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMenuAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
