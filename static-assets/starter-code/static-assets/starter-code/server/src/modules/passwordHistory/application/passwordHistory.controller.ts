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
  PasswordHistory,
  PasswordHistoryDomainFacade,
} from '@server/modules/passwordHistory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PasswordHistoryApplicationEvent } from './passwordHistory.application.event'
import {
  PasswordHistoryCreateDto,
  PasswordHistoryUpdateDto,
} from './passwordHistory.dto'

@Controller('/v1/passwordHistorys')
export class PasswordHistoryController {
  constructor(
    private eventService: EventService,
    private passwordHistoryDomainFacade: PasswordHistoryDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.passwordHistoryDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: PasswordHistoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.passwordHistoryDomainFacade.create(body)

    await this.eventService.emit<PasswordHistoryApplicationEvent.PasswordHistoryCreated.Payload>(
      PasswordHistoryApplicationEvent.PasswordHistoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:passwordHistoryId')
  async findOne(
    @Param('passwordHistoryId') passwordHistoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.passwordHistoryDomainFacade.findOneByIdOrFail(
      passwordHistoryId,
      queryOptions,
    )

    return item
  }

  @Patch('/:passwordHistoryId')
  async update(
    @Param('passwordHistoryId') passwordHistoryId: string,
    @Body() body: PasswordHistoryUpdateDto,
  ) {
    const item =
      await this.passwordHistoryDomainFacade.findOneByIdOrFail(
        passwordHistoryId,
      )

    const itemUpdated = await this.passwordHistoryDomainFacade.update(
      item,
      body as Partial<PasswordHistory>,
    )
    return itemUpdated
  }

  @Delete('/:passwordHistoryId')
  async delete(@Param('passwordHistoryId') passwordHistoryId: string) {
    const item =
      await this.passwordHistoryDomainFacade.findOneByIdOrFail(
        passwordHistoryId,
      )

    await this.passwordHistoryDomainFacade.delete(item)

    return item
  }
}
