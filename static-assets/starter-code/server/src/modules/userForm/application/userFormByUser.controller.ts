import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserFormDomainFacade } from '@server/modules/userForm/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserFormApplicationEvent } from './userForm.application.event'
import { UserFormCreateDto } from './userForm.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class UserFormByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private userFormDomainFacade: UserFormDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/userForms')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.userFormDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/userForms')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: UserFormCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.userFormDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UserFormApplicationEvent.UserFormCreated.Payload>(
      UserFormApplicationEvent.UserFormCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
