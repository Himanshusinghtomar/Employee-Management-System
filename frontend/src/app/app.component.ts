import { Component, ViewChild } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  @ViewChild(EmployeeListComponent) employeeList!: EmployeeListComponent;

  refreshEmployeeList(): void {
    this.employeeList.ngOnInit(); // Refresh employee list
  }
}
