import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListAlbumsComponent } from './card-list-albums.component';

describe('CardListAlbumsComponent', () => {
  let component: CardListAlbumsComponent;
  let fixture: ComponentFixture<CardListAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
