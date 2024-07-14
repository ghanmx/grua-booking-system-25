import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { TowTruckType } from '../../../modules/towTruckType/domain'

@Entity()
export class TowTruckTypeFeatures {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  feature: string

  @Column()
  towTruckTypeId: string

  @ManyToOne(() => TowTruckType, parent => parent.towTruckTypeFeaturess)
  @JoinColumn({ name: 'towTruckTypeId' })
  towTruckType?: TowTruckType

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
