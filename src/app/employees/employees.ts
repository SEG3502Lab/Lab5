import {Component, inject} from '@angular/core';
import {EmployeeService} from "../service/employee-service";
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.html',
  styleUrls: ['./employees.css'],
  imports: [RouterLink, AsyncPipe, DatePipe]
})
export class Employees {
  private employeeService: EmployeeService = inject(EmployeeService);
  protected employees$ = this.employeeService.getEmployees();
}
