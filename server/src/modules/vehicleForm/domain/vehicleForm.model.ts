import { ColumnNumeric } from '../../../core/database'
import {  Column,
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

@Entity()
export class VehicleForm {
  @PrimaryGeneratedColumn('uuid')
  id: string

  formData: any

  @Column({})
  vehicleId: string

  @ManyToOne(() => TowServiceRequest, parent => parent.vehicleFormsAsVehicle)
  @JoinColumn({ name: 'vehicleId' })
  vehicle?: TowServiceRequest

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
