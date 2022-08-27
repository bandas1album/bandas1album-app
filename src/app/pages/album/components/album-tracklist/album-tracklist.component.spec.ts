import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTracklistComponent } from './album-tracklist.component';

describe('AlbumTracklistComponent', () => {
  let component: AlbumTracklistComponent;
  let fixture: ComponentFixture<AlbumTracklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumTracklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
