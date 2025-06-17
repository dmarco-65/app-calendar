import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserManager {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  constructor(private userService: UserService) {}

  loadData(): void {
    this.userService.getData().subscribe(
      data => this.dataSubject.next(data)
    );
  }

  updateData(id: number, data: any): void {
    this.userService.updateData(id, data).subscribe(
      updatedData => this.dataSubject.next(updatedData)
    );
  }
}
