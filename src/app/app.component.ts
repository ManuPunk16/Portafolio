import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { FooterComponent } from './components/footer/footer.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        // FooterComponent,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        RouterModule,
        MatSlideToggleModule,
        NgIf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy, OnInit {

  private themeSubscription!: Subscription;
  isDarkTheme = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  title = "Portafolio";

  constructor(private themeService: ThemeService) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkTheme$.subscribe(isDarkTheme => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
  }
}
