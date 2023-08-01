import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loading.asObservable();

  showLoader(): void {
    this.loading.next(true);
  }

  hideLoader(): void {
    this.loading.next(false);
  }
}
