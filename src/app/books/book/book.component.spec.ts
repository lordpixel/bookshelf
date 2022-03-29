import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Book information', () => {
    const sampleBook = {
      "id":"B00000",
      "author":"Chinua Achebe",
      "country":"Nigeria",
      "imageLink":"assets/JPG/things-fall-apart.jpg",
      "title":"Things Fall Apart",
      "year": 1958
    };

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // inject a Book sample
    component.book = sampleBook;
    fixture.detectChanges();
    
    const figure = fixture.debugElement.query(By.css("figure"));
    const figcaption = fixture.debugElement.query(By.css("figcaption"));
    const wishlistButton = fixture.debugElement.query(By.css("img"));
    
    const descriptiveList = fixture.debugElement.query(By.css("dl"));
    const descriptiveTerms = fixture.debugElement.queryAll(By.css("dt"));
    const descriptiveDefinition = fixture.debugElement.queryAll(By.css("dd"));

    // elements must exist
    expect(figure).toBeTruthy();
    expect(figcaption).toBeTruthy();
    expect(wishlistButton).toBeTruthy();

    expect(descriptiveList).toBeTruthy();
    expect(descriptiveTerms).toBeTruthy();
    expect(descriptiveDefinition).toBeTruthy();

    // elements must display the correct information about the Book
    expect(figcaption.nativeElement.innerText).toEqual(sampleBook.title);
    expect(descriptiveTerms[0].nativeElement.innerText).toEqual('Author:');
    expect(descriptiveTerms[1].nativeElement.innerText).toEqual('Year:');
    expect(descriptiveDefinition[0].nativeElement.innerText).toEqual(sampleBook.author);
    expect(parseInt(descriptiveDefinition[1].nativeElement.innerText, 10)).toEqual(sampleBook.year);
  });
});
