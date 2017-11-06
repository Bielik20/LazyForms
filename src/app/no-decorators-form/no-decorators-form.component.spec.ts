import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDecoratorsFormComponent } from './no-decorators-form.component';

describe('NoDecoratorsFormComponent', () => {
  let component: NoDecoratorsFormComponent;
  let fixture: ComponentFixture<NoDecoratorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDecoratorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDecoratorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
