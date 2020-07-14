import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonHookComponent } from './back-button-hook.component';

describe('BackButtonHookComponent', () => {
  let component: BackButtonHookComponent;
  let fixture: ComponentFixture<BackButtonHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
