import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-select-count-grupo',
  templateUrl: './book-select-count-grupo.component.html',
  styleUrls: ['./book-select-count-grupo.component.scss']
})
export class BookSelectCountGrupoComponent implements OnInit {

  @Input() book :  any;
  constructor() { }

  ngOnInit(): void {
  }

}
