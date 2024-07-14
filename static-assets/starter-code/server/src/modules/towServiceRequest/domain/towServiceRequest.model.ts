import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { TowTruckType } from '../../../modules/towTruckType/domain'

import { VehicleForm } from '../../../modules/vehicleForm/domain'

@Entity()
export class TowServiceRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  startLocation: string

  @Column({})
  endLocation: string

  @Column({})
  vehicleType: string

  @Column({ nullable: true })
  breakdownDetails?: string

  @ColumnNumeric({ type: 'numeric' })
  distance: number

  @ColumnNumeric({ type: 'numeric' })
  baseFare: number

  @ColumnNumeric({ type: 'numeric' })
  costPerKm: number

  @ColumnNumeric({ type: 'numeric' })
  tollCharges: number

  @ColumnNumeric({ type: 'numeric' })
  totalCost: number

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  rating?: number

  @Column({})
  completed: boolean

  @Column({ nullable: true })
  cancellationReason?: string

  @Column({ nullable: true })
  paymentStatus?: string

  @Column({ nullable: true })
  paymentMethod?: string

  @Column({ nullable: true })
  distanceUnit?: string

  @Column({ nullable: true })
  startTime?: string

  @Column({ nullable: true })
  endTime?: string

  @Column({ nullable: true })
  locationHistory?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.towServiceRequests)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  towTruckTypeId: string

  @ManyToOne(() => TowTruckType, parent => parent.towServiceRequests)
  @JoinColumn({ name: 'towTruckTypeId' })
  towTruckType?: TowTruckType

  @OneToMany(() => VehicleForm, child => child.vehicle)
  vehicleFormsAsVehicle?: VehicleForm[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
