import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfosComponent } from './album-infos.component';

describe('AlbumInfosComponent', () => {
  let component: AlbumInfosComponent;
  let fixture: ComponentFixture<AlbumInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
