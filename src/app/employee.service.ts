import { Injectable } from '@angular/core';

/**
 * Duck-type checkup with interface
 * for the data types -- list of employees
 */
  export interface Section {
    name: string;
    position: string;
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
        score: 20,
      },
      {
        name: 'John Smith',
        position: 'Sales Representative',
        score: 20,
      }
    ];

  /** Employees getter */
    getEmployees() {
      return this.employees;
    }
}
