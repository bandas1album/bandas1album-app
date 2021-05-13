import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSocialComponent } from './sidebar-social.component';

describe('SidebarSocialComponent', () => {
  let component: SidebarSocialComponent;
  let fixture: ComponentFixture<SidebarSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
