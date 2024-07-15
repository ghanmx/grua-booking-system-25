import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationDomainFacade } from './authentication.domain.facade';

@Controller('auth')
export class AuthController {
  constructor(private readonly authFacade: AuthenticationDomainFacade) {}

  @Post('register')
  register(@Body() body: { username: string, password: string }) {
    this.authFacade.register(body.username, body.password);
    return { message: 'User registered successfully' };
  }

  @Post('login')
  login(@Body() body: { username: string, password: string }) {
    const authenticated = this.authFacade.authenticate(body.username, body.password);
    if (authenticated) {
      return { message: 'Login successful' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }

  @Post('change-password')
  changePassword(@Body() body: { username: string, newPassword: string }) {
    this.authFacade.changePassword(body.username, body.newPassword);
    return { message: 'Password changed successfully' };
  }
}
