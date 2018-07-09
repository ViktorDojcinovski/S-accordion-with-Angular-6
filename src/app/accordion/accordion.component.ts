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

  /* Type interfaces */
    employees: Section[];

  /* Variable declarations */
    items;
    item_headings;
    show_less_btns;

  constructor(private service: EmployeeService, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit() {
    /* DOM elements caching on View initialization
      Assumes existance of elements -- list-group-item, list-item-heading, show-less.
    */
      this.items = this.elementRef.nativeElement.querySelectorAll('.list-group-item');
      this.item_headings = this.elementRef.nativeElement.querySelectorAll('.list-item-heading');
      this.show_less_btns = this.elementRef.nativeElement.querySelectorAll('.show-less');

    /* Subscribe for event emiters */
      this.addListenersHeadings();
      this.addListenersShowLessButtons();
  }

  getEmployees() {
    this.employees = this.service.getEmployees();
  }

  /**
   * Click event subscription for item heading elements
   *
   * @return void
   */
    addListenersHeadings() {
      for (let i = 0; i < this.item_headings.length; i++) {
        this.item_headings[i].addEventListener('click', this.toggleMetaDescription.bind(this), false);
      }
    }

  /**
   * Click event subscription for show-less buttons
   *
   * @return void
   */
    addListenersShowLessButtons() {
      for (let i = 0; i < this.show_less_btns.length; i++) {
        this.show_less_btns[i].addEventListener('click', this.showLessFunc.bind(this), false);
      }
    }


  /**
   * Callback function for the addListenerHeadings event listener
   *
   * @param event - the event object
   * @return void
   */
    toggleMetaDescription(event) {
      /* This function assumes s-close and s-open class styles declared
        with their functionalities within style sheet accordion.component.scss.
      */
      const itemClass = event.currentTarget.parentNode.className;
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].className = 'list-group-item s-close';
      }
      if (itemClass === 'list-group-item s-close') {
          event.currentTarget.parentNode.className = 'list-group-item s-open';
          event.currentTarget.removeEventListener('click', this.toggleMetaDescription.bind(this), false);
      }
    }

  /**
   * Callback function for the addListenersShowLessButtons event listener
   *
   * @param event - the event object
   * @return void
   */
    showLessFunc(event) {
      event.currentTarget.parentNode.parentNode.className = 'list-group-item s-close';
    }
}

