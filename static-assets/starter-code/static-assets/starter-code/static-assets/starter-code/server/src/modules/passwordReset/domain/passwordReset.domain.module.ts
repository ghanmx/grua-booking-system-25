import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PasswordResetDomainFacade } from './passwordReset.domain.facade'
import { PasswordReset } from './passwordReset.model'

@Module({
  imports: [TypeOrmModule.forFeature([PasswordReset]), DatabaseHelperModule],
  providers: [PasswordResetDomainFacade, PasswordResetDomainFacade],
  exports: [PasswordResetDomainFacade],
})
export class PasswordResetDomainModule {}
