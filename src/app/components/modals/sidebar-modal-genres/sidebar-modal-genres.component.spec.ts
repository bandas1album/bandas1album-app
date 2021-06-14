import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarModalGenresComponent } from './sidebar-modal-genres.component';

describe('SidebarModalGenresComponent', () => {
  let component: SidebarModalGenresComponent;
  let fixture: ComponentFixture<SidebarModalGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarModalGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarModalGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
