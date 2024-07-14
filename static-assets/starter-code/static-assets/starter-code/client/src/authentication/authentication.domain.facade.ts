import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationDomainFacade {
  private users = new Map<string, string>();

  register(username: string, password: string): void {
    if (this.users.has(username)) {
      throw new Error('User already exists');
    }
    this.users.set(username, password);
  }

  authenticate(username: string, password: string): boolean {
    return this.users.get(username) === password;
  }

  changePassword(username: string, newPassword: string): void {
    if (this.users.has(username)) {
      this.users.set(username, newPassword);
    } else {
      throw new Error('User not found');
    }
  }
}
