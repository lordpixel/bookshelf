import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookListComponent } from './book-list.component';
import {LIST_TYPE} from '../books.constants';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 10 Books in Wishlist', () => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;

    // if your destination list is AVAILABLE, you are seeing the Wishlist
    component.destinationType = LIST_TYPE.AVAILABLE;
    fixture.detectChanges();
    
    const unorderedList = fixture.debugElement.queryAll(By.css("ul"));
    const listItems = fixture.debugElement.queryAll(By.css("app-book"));

    expect(unorderedList).toHaveSize(1);
    expect(listItems).toHaveSize(10);
  });

  it('should render 90 Books in Books list', () => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    const unorderedList = fixture.debugElement.queryAll(By.css("ul"));
    const listItems = fixture.debugElement.queryAll(By.css("app-book"));

    expect(unorderedList).toHaveSize(1);
    expect(listItems).toHaveSize(90);
  });
});
