import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Notification } from '../../../modules/notification/domain'
import { PasswordReset } from '../../../modules/passwordReset/domain'
import { TowServiceRequest } from '../../../modules/towServiceRequest/domain'
import { Event } from '../../../modules/event/domain'
import { NotificationPreference } from '../../../modules/notificationPreference/domain'
import { PasswordHistory } from '../../../modules/passwordHistory/domain'
import { UserForm } from '../../../modules/userForm/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true, unique: true })
  email?: string

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ nullable: true, select: false })
  stripeCustomerId?: string

  @Column({ nullable: true, select: false })
  password?: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @Column({ nullable: true })
  lastLogin?: string

  @Column({})
  isActive: boolean

  @Column({})
  isVerified: boolean

  @OneToMany(() => PasswordReset, child => child.user)
  passwordResets?: PasswordReset[]

  @OneToMany(() => TowServiceRequest, child => child.user)
  towServiceRequests?: TowServiceRequest[]

  @OneToMany(() => Event, child => child.user)
  events?: Event[]

  @OneToMany(() => NotificationPreference, child => child.user)
  notificationPreferences?: NotificationPreference[]

  @OneToMany(() => PasswordHistory, child => child.user)
  passwordHistorys?: PasswordHistory[]

  @OneToMany(() => UserForm, child => child.user)
  userForms?: UserForm[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
