import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarModalComponent } from './sidebar-modal.component';

describe('SidebarModalComponent', () => {
  let component: SidebarModalComponent;
  let fixture: ComponentFixture<SidebarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
