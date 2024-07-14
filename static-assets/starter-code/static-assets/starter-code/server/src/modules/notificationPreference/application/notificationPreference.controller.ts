import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  NotificationPreference,
  NotificationPreferenceDomainFacade,
} from '@server/modules/notificationPreference/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { NotificationPreferenceApplicationEvent } from './notificationPreference.application.event'
import {
  NotificationPreferenceCreateDto,
  NotificationPreferenceUpdateDto,
} from './notificationPreference.dto'

@Controller('/v1/notificationPreferences')
export class NotificationPreferenceController {
  constructor(
    private eventService: EventService,
    private notificationPreferenceDomainFacade: NotificationPreferenceDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.notificationPreferenceDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: NotificationPreferenceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.notificationPreferenceDomainFacade.create(body)

    await this.eventService.emit<NotificationPreferenceApplicationEvent.NotificationPreferenceCreated.Payload>(
      NotificationPreferenceApplicationEvent.NotificationPreferenceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:notificationPreferenceId')
  async findOne(
    @Param('notificationPreferenceId') notificationPreferenceId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.notificationPreferenceDomainFacade.findOneByIdOrFail(
        notificationPreferenceId,
        queryOptions,
      )

    return item
  }

  @Patch('/:notificationPreferenceId')
  async update(
    @Param('notificationPreferenceId') notificationPreferenceId: string,
    @Body() body: NotificationPreferenceUpdateDto,
  ) {
    const item =
      await this.notificationPreferenceDomainFacade.findOneByIdOrFail(
        notificationPreferenceId,
      )

    const itemUpdated = await this.notificationPreferenceDomainFacade.update(
      item,
      body as Partial<NotificationPreference>,
    )
    return itemUpdated
  }

  @Delete('/:notificationPreferenceId')
  async delete(
    @Param('notificationPreferenceId') notificationPreferenceId: string,
  ) {
    const item =
      await this.notificationPreferenceDomainFacade.findOneByIdOrFail(
        notificationPreferenceId,
      )

    await this.notificationPreferenceDomainFacade.delete(item)

    return item
  }
}
