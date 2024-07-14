import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { NotificationPreferenceDomainFacade } from '@server/modules/notificationPreference/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { NotificationPreferenceApplicationEvent } from './notificationPreference.application.event'
import { NotificationPreferenceCreateDto } from './notificationPreference.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class NotificationPreferenceByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private notificationPreferenceDomainFacade: NotificationPreferenceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/notificationPreferences')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.notificationPreferenceDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/notificationPreferences')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: NotificationPreferenceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item =
      await this.notificationPreferenceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<NotificationPreferenceApplicationEvent.NotificationPreferenceCreated.Payload>(
      NotificationPreferenceApplicationEvent.NotificationPreferenceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
