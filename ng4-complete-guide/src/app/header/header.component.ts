import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Output() sectionSelected = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  ngOnInit() {

  }

  onSelect(section: string) {
      this.sectionSelected.emit(section);
  }
 }
