import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuthenticated$ = signal<boolean>(false);

  login() {
    this.isAuthenticated$.set(true);
  }

  logout() {
    this.isAuthenticated$.set(false);
  }
}
