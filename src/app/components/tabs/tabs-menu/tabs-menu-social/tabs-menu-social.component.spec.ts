import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMenuSocialComponent } from './tabs-menu-social.component';

describe('TabsMenuSocialComponent', () => {
  let component: TabsMenuSocialComponent;
  let fixture: ComponentFixture<TabsMenuSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsMenuSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsMenuSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
