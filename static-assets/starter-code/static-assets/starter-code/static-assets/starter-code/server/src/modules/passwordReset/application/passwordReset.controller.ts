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
  PasswordReset,
  PasswordResetDomainFacade,
} from '@server/modules/passwordReset/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PasswordResetApplicationEvent } from './passwordReset.application.event'
import {
  PasswordResetCreateDto,
  PasswordResetUpdateDto,
} from './passwordReset.dto'

@Controller('/v1/passwordResets')
export class PasswordResetController {
  constructor(
    private eventService: EventService,
    private passwordResetDomainFacade: PasswordResetDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.passwordResetDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: PasswordResetCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.passwordResetDomainFacade.create(body)

    await this.eventService.emit<PasswordResetApplicationEvent.PasswordResetCreated.Payload>(
      PasswordResetApplicationEvent.PasswordResetCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:passwordResetId')
  async findOne(
    @Param('passwordResetId') passwordResetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.passwordResetDomainFacade.findOneByIdOrFail(
      passwordResetId,
      queryOptions,
    )

    return item
  }

  @Patch('/:passwordResetId')
  async update(
    @Param('passwordResetId') passwordResetId: string,
    @Body() body: PasswordResetUpdateDto,
  ) {
    const item =
      await this.passwordResetDomainFacade.findOneByIdOrFail(passwordResetId)

    const itemUpdated = await this.passwordResetDomainFacade.update(
      item,
      body as Partial<PasswordReset>,
    )
    return itemUpdated
  }

  @Delete('/:passwordResetId')
  async delete(@Param('passwordResetId') passwordResetId: string) {
    const item =
      await this.passwordResetDomainFacade.findOneByIdOrFail(passwordResetId)

    await this.passwordResetDomainFacade.delete(item)

    return item
  }
}
