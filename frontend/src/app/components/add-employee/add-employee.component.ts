import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  @Output() employeeAdded = new EventEmitter<void>();
  employee: Employee = {
    name: '',
    email: '',
    department: ''
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee(): void {
    if (!this.employee.name || !this.employee.email || !this.employee.department) {
      alert('Please fill in all fields.');
      return;
    }

    this.employeeService.addEmployee(this.employee).subscribe(() => {
      alert('Employee added successfully!');
      this.employee = { name: '', email: '', department: '' };
      this.employeeAdded.emit();
    });
  }
}
