import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PasswordHistoryDomainFacade } from '@server/modules/passwordHistory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PasswordHistoryApplicationEvent } from './passwordHistory.application.event'
import { PasswordHistoryCreateDto } from './passwordHistory.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class PasswordHistoryByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private passwordHistoryDomainFacade: PasswordHistoryDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/passwordHistorys')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.passwordHistoryDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/passwordHistorys')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: PasswordHistoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.passwordHistoryDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PasswordHistoryApplicationEvent.PasswordHistoryCreated.Payload>(
      PasswordHistoryApplicationEvent.PasswordHistoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
