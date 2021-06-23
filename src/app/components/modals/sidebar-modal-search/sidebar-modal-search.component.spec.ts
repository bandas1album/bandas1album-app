import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarModalSearchComponent } from './sidebar-modal-search.component';

describe('SidebarModalSearchComponent', () => {
  let component: SidebarModalSearchComponent;
  let fixture: ComponentFixture<SidebarModalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarModalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarModalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
