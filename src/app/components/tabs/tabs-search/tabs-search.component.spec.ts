import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSearchComponent } from './tabs-search.component';

describe('TabsSearchComponent', () => {
  let component: TabsSearchComponent;
  let fixture: ComponentFixture<TabsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
