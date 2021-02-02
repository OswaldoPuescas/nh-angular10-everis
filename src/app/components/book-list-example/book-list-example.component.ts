import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  c_grupo_libros : any; 
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
  this.c_grupo_libros=[];
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
    let encontrado = false;
for(var item of this.c_grupo_libros){
if(book.name == item.nombre)
{
item.cantidad = item.cantidad + 1;
encontrado = true;
break;
}
}
if(encontrado == false){
this.c_grupo_libros.push( {"nombre": book.name, "cantidad": 1} );
}
    
  }

}
