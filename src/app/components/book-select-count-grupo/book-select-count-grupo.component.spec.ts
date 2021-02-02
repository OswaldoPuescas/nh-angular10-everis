import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectCountGrupoComponent } from './book-select-count-grupo.component';

describe('BookSelectCountGrupoComponent', () => {
  let component: BookSelectCountGrupoComponent;
  let fixture: ComponentFixture<BookSelectCountGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSelectCountGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectCountGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
