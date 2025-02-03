import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./auth.service";
import { SignupModalComponent } from "./signup-modal/signup-modal.component";
import { LoginModalComponent } from "./login-modal/login-modal.component";
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule],
  template: `
    <mat-toolbar>
      <div class="toolbar-container">
        <span>Currency Converter</span>
        <div class="toolbar-buttons-container">
          <button
            mat-button
            *ngIf="!authService.isAuthenticated$()"
            (click)="openLoginModal()"
          >
            Login
          </button>
          <button
            mat-button
            *ngIf="!authService.isAuthenticated$()"
            (click)="openSignupModal()"
          >
            Signup
          </button>
          <button
            mat-button
            *ngIf="authService.isAuthenticated$()"
            (click)="logout()"
          >
            Logout
          </button>
        </div>
      </div>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      mat-toolbar {
        background-color: #333;
        width: 100%;
        font-size: 1rem;

        .toolbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .toolbar-buttons-container {
          display: flex;
          gap: 0.5rem;
        }
      }

      @media (min-width: 425px) and (max-width: 768px) {
        mat-toolbar {
          font-size: 1.2rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1024px) {
        mat-toolbar {
          font-size: 1.5rem;

          .toolbar-buttons-container {
            display: flex;
            gap: 0.8rem;
          }

          button {
            font-size: 1rem;
          }
        }
      }

      @media (min-width: 1024px) {
        mat-toolbar {
          font-size: 2rem;
          height: 5rem;

          .toolbar-buttons-container {
            display: flex;
            gap: 1rem;
          }

          button {
            font-size: 1.2rem;
          }
        }
      }

      main {
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;
      }
    `,
  ],
})
export class AppComponent {
  constructor(public authService: AuthService, private dialog: MatDialog) {}

  openSignupModal() {
    this.dialog.open(SignupModalComponent);
  }

  openLoginModal() {
    this.dialog.open(LoginModalComponent);
  }

  logout() {
    this.authService.logout();
  }
}
