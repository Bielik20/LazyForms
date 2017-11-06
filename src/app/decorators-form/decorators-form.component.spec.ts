import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsFormComponent } from './decorators-form.component';

describe('DecoratorsFormComponent', () => {
  let component: DecoratorsFormComponent;
  let fixture: ComponentFixture<DecoratorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
