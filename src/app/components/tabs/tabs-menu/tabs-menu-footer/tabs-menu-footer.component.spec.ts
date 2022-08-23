import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMenuFooterComponent } from './tabs-menu-footer.component';

describe('TabsMenuFooterComponent', () => {
  let component: TabsMenuFooterComponent;
  let fixture: ComponentFixture<TabsMenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsMenuFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
