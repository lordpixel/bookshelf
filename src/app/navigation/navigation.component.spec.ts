import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let routerSpy: { navigate: any; };

  beforeEach(async () => {
    routerSpy = {navigate: jasmine.createSpy('navigate')};

    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a logo', () => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect (routerSpy.navigate).toHaveBeenCalledWith(['/wishlist']);
  });
});
