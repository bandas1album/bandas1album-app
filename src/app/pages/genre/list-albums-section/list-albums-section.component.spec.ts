import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumsSectionComponent } from './list-albums-section.component';

describe('ListAlbumsSectionComponent', () => {
  let component: ListAlbumsSectionComponent;
  let fixture: ComponentFixture<ListAlbumsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlbumsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlbumsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
