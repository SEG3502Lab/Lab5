import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, query, orderBy, Timestamp } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { EmployeeEntity } from '../model/employeeEntity';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  private employeesRef = collection(this.firestore, 'employees');

  getEmployees(): Observable<EmployeeEntity[]> {
    const q = query(this.employeesRef, orderBy('name'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => new EmployeeEntity(
        d['name'],
        d['dateOfBirth'] instanceof Timestamp ? d['dateOfBirth'].toDate() : new Date(d['dateOfBirth']),
        d['city'],
        d['salary'],
        d['gender'],
        d['email'],
        d['id']
      )))
    );
  }

  addEmployee(employee: EmployeeEntity) {
    return addDoc(this.employeesRef, {
      name: employee.name,
      dateOfBirth: Timestamp.fromDate(employee.dateOfBirth),
      city: employee.city,
      salary: employee.salary,
      gender: employee.gender ?? '',
      email: employee.email ?? ''
    });
  }
}
