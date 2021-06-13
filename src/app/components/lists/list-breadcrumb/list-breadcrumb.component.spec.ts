import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBreadcrumbComponent } from './list-breadcrumb.component';

describe('ListBreadcrumbComponent', () => {
  let component: ListBreadcrumbComponent;
  let fixture: ComponentFixture<ListBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
