import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Employee } from './employee';
import { EmployeeService } from '../service/employee-service';

describe('Employee', () => {
  let component: Employee;
  let fixture: ComponentFixture<Employee>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Employee],
      providers: [
        provideRouter([]),
        { provide: EmployeeService, useValue: { getEmployees: () => of([]), addEmployee: () => Promise.resolve() } }
      ]
    });
    fixture = TestBed.createComponent(Employee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
