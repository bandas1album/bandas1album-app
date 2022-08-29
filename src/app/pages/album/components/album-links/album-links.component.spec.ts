import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLinksComponent } from './album-links.component';

describe('AlbumLinksComponent', () => {
  let component: AlbumLinksComponent;
  let fixture: ComponentFixture<AlbumLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
