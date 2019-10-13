import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { callback } from './jwt.stratagy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @HttpCode(HttpStatus.OK)
  login(@Param() param) {
    return this.authService.login(param.name, param.password);
  }

  @Get('check-login')
  @UseGuards(AuthGuard('jwt', { session: false, callback}))
  public checkLogin() {
    return "valid user:" + this.authService.getUser().name;
  }
}
