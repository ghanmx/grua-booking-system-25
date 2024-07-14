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

import { TowServiceRequest } from '../../../modules/towServiceRequest/domain'

import { TowTruckTypeFeatures } from '../../../modules/towTruckTypeFeatures/domain'

@Entity()
export class TowTruckType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @ColumnNumeric({ type: 'numeric' })
  baseFare: number

  @ColumnNumeric({ type: 'numeric' })
  costPerKm: number

  @OneToMany(() => TowServiceRequest, child => child.towTruckType)
  towServiceRequests?: TowServiceRequest[]

  @OneToMany(() => TowTruckTypeFeatures, child => child.towTruckType)
  towTruckTypeFeaturess?: TowTruckTypeFeatures[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
