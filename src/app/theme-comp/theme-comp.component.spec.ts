import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCompComponent } from './theme-comp.component';

describe('ThemeCompComponent', () => {
  let component: ThemeCompComponent;
  let fixture: ComponentFixture<ThemeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
