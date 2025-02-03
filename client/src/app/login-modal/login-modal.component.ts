import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-login-modal",
  standalone: true,
  imports: [],
  template: `
    <div class="modal-container">
      <h1 mat-dialog-title>Login</h1>
      <div mat-dialog-content>
        <form action=""></form>
      </div>
      <div mat-dialog-actions class="modal-buttons-container">
        <button mat-button (click)="onClose()">Close</button>
        <button mat-button (click)="onLogin()">Login</button>
      </div>
    </div>
  `,
  styles: `
  .modal-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: #f5f5f5;
    padding: 1.5rem;
  }

  h1 {
    margin: 0;
  }

  .modal-buttons-container {
    display: flex;
    gap: 0.5rem;
  }
  `,
})
export class LoginModalComponent {
  constructor(private dialogRef: MatDialogRef<LoginModalComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onLogin(): void {
    this.dialogRef.close();
  }
}
