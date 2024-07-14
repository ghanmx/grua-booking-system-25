import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PasswordResetDomainFacade } from '@server/modules/passwordReset/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PasswordResetApplicationEvent } from './passwordReset.application.event'
import { PasswordResetCreateDto } from './passwordReset.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class PasswordResetByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private passwordResetDomainFacade: PasswordResetDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/passwordResets')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.passwordResetDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/passwordResets')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: PasswordResetCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.passwordResetDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PasswordResetApplicationEvent.PasswordResetCreated.Payload>(
      PasswordResetApplicationEvent.PasswordResetCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
