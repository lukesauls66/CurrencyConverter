import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-signup-modal",
  standalone: true,
  imports: [],
  template: `
    <div class="modal-container">
      <h1 mat-dialog-title>Sign Up</h1>
      <div mat-dialog-content class="modal-content">
        <form action=""></form>
      </div>
      <div mat-dialog-actions class="modal-buttons-container">
        <button mat-button (click)="onClose()">Close</button>
        <button mat-button (click)="onSignUp()">Sign Up</button>
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
export class SignupModalComponent {
  constructor(private dialogRef: MatDialogRef<SignupModalComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSignUp(): void {
    this.dialogRef.close();
  }
}
