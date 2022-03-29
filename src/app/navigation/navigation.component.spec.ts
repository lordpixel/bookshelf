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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two navigation links', () => {
    fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    const listItems = compiled.querySelectorAll('li');

    expect(listItems).toHaveSize(2);
    listItems.forEach((item: HTMLElement) => expect(['Books', 'Wishlist'].includes(item.innerText)))
  });
});
