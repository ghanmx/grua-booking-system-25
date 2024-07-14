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
import { UserForm, UserFormDomainFacade } from '@server/modules/userForm/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UserFormApplicationEvent } from './userForm.application.event'
import { UserFormCreateDto, UserFormUpdateDto } from './userForm.dto'

@Controller('/v1/userForms')
export class UserFormController {
  constructor(
    private eventService: EventService,
    private userFormDomainFacade: UserFormDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.userFormDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: UserFormCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.userFormDomainFacade.create(body)

    await this.eventService.emit<UserFormApplicationEvent.UserFormCreated.Payload>(
      UserFormApplicationEvent.UserFormCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:userFormId')
  async findOne(
    @Param('userFormId') userFormId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.userFormDomainFacade.findOneByIdOrFail(
      userFormId,
      queryOptions,
    )

    return item
  }

  @Patch('/:userFormId')
  async update(
    @Param('userFormId') userFormId: string,
    @Body() body: UserFormUpdateDto,
  ) {
    const item = await this.userFormDomainFacade.findOneByIdOrFail(userFormId)

    const itemUpdated = await this.userFormDomainFacade.update(
      item,
      body as Partial<UserForm>,
    )
    return itemUpdated
  }

  @Delete('/:userFormId')
  async delete(@Param('userFormId') userFormId: string) {
    const item = await this.userFormDomainFacade.findOneByIdOrFail(userFormId)

    await this.userFormDomainFacade.delete(item)

    return item
  }
}
