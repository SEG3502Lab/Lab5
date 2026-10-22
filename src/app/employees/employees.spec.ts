import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Employees } from './employees';
import { EmployeeService } from '../service/employee-service';

describe('Employees', () => {
  let component: Employees;
  let fixture: ComponentFixture<Employees>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Employees],
      providers: [
        provideRouter([]),
        { provide: EmployeeService, useValue: { getEmployees: () => of([]), addEmployee: () => Promise.resolve() } }
      ]
    });
    fixture = TestBed.createComponent(Employees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
