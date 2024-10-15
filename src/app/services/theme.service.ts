import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  public isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  setDarkTheme(isDarkTheme: boolean) {
    if (this.isDarkThemeSubject.value !== isDarkTheme) {
      this.isDarkThemeSubject.next(isDarkTheme);
      if (isDarkTheme) {
        this.document.body.classList.add('dark-mode');
      } else {
        this.document.body.classList.remove('dark-mode');
      }
    }
  }
}
