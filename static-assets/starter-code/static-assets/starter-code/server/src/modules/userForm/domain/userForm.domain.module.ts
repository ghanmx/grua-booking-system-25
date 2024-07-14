import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UserFormDomainFacade } from './userForm.domain.facade'
import { UserForm } from './userForm.model'

@Module({
  imports: [TypeOrmModule.forFeature([UserForm]), DatabaseHelperModule],
  providers: [UserFormDomainFacade, UserFormDomainFacade],
  exports: [UserFormDomainFacade],
})
export class UserFormDomainModule {}
