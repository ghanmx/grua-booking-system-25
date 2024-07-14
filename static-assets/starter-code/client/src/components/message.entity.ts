import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Conversation } from './conversation.entity.ts';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ManyToOne(() => User, user => user.messages)
  sender: User;

  @ManyToOne(() => Conversation, conversation => conversation.messages)
  conversation: Conversation;

  @Column({ default: false })
  isRead: boolean;
}
