import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopNavigationBarComponent } from './top-navigation-bar.component';

describe('TopNavigationBarComponent', () => {
  let component: TopNavigationBarComponent;
  let fixture: ComponentFixture<TopNavigationBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavigationBarComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TopNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
