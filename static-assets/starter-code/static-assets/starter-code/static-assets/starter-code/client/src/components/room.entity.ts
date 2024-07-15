import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './user.entity'
import { Message } from './message.entity.ts'

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @Column({ default: false })
  isPrivate: boolean

  @ManyToOne(() => User, user => user.createdRooms)
  creator: User

  @OneToMany(() => Message, message => message.room)
  messages: Message[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
