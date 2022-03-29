import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct markup', () => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('header');
    const logo = compiled.querySelector('svg');
    const title = compiled.querySelector('h1');

    expect(header).toBeTruthy();
    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
