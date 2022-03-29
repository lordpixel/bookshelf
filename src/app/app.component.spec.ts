import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bookshelf'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bookshelf');
  });

  it('should render main container', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const container = fixture.debugElement.query(By.css(".container"));
    expect(container).toBeTruthy();
  });

  it('should render content section', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const content = fixture.debugElement.query(By.css(".content"));
    expect(content).toBeTruthy();
  });

  it('should render navigation container', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const navigation = fixture.debugElement.query(By.css(".navigation"));
    expect(navigation).toBeTruthy();
  });

  it('should render outlet continer', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const outlet = fixture.debugElement.query(By.css(".outlet"));
    expect(outlet).toBeTruthy();
  });
});
