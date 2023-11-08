import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { BottomNavigationBarComponent } from './bottom-navigation-bar.component';

describe('BottomNavigationBarComponent', () => {
  let component: BottomNavigationBarComponent;
  let fixture: ComponentFixture<BottomNavigationBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BottomNavigationBarComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
