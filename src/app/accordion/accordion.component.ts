import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Section } from '../employee.service';

import { ButtonsModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers:  [ EmployeeService ]
})
export class AccordionComponent implements OnInit, AfterViewInit {

  employees: Section[];

  items;
  item_headings;
  show_less_btns;

  constructor(private service: EmployeeService, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit() {

    this.items = this.elementRef.nativeElement.querySelectorAll('.list-group-item');
    this.item_headings = this.elementRef.nativeElement.querySelectorAll('.list-item-heading');
    this.show_less_btns = this.elementRef.nativeElement.querySelectorAll('.show-less');
    this.addListenersHeadings();
    this.addListenersShowLessButtons();
  }

  getEmployees() {
    this.employees = this.service.getEmployees();
  }

  addListenersHeadings() {
    for (let i = 0; i < this.item_headings.length; i++) {
      this.item_headings[i].addEventListener('click', this.toggleMetaDescription.bind(this), false);
    }
  }

  addListenersShowLessButtons() {
    for (let i = 0; i < this.show_less_btns.length; i++) {
      console.log(this.show_less_btns[i]);
      this.show_less_btns[i].addEventListener('click', this.showLessFunc.bind(this), false);
    }
  }

  toggleMetaDescription(event) {
    const itemClass = event.currentTarget.parentNode.className;
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].className = 'list-group-item s-close';
    }
    if (itemClass === 'list-group-item s-close') {
        event.currentTarget.parentNode.className = 'list-group-item s-open';
        event.currentTarget.removeEventListener('click', this.toggleMetaDescription.bind(this), false);
    }
  }

  showLessFunc(event) {
    event.currentTarget.parentNode.parentNode.className = 'list-group-item s-close';
  }
}

