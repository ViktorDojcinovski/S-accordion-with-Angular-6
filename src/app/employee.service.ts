import { Injectable } from '@angular/core';

/**
 * Duck-type checkup with interface
 * for the data types -- list of employees
 */
  export interface Section {
    name: string;
    position: string;
    phone: string;
    email: string;
    score: number;
  }

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  /**
   * Mockup data for emplyees list,
   * it uses type interface of Section
   */
    private employees: Section[] = [
      {
        name: 'John Smith',
        position: 'Sales Representative',
        phone: '+9728888888',
        email: 'john@email.com',
        score: 5,
      },
      {
        name: 'John Aerosmith',
        position: 'Sales Representative',
        phone: '+9728888888',
        email: 'john.aerosmith@email.com',
        score: 5,
      },
      {
        name: 'John Blacksmith',
        position: 'Sales Representative',
        phone: '+9728888888',
        email: 'john.blacksmith@email.com',
        score: 5,
      }
    ];

  /** Employees getter */
    getEmployees() {
      return this.employees;
    }
}
