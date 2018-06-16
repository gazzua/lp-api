import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import BaseEntity from '@entities/BaseEntity';
import { DB1 } from '@modules/Database';
import User from '@entities/User';
import Vote from '@entities/Vote';

@Entity({ database: DB1 })
export default class VoteInstance extends BaseEntity {
  @Column()
  public userId: number;
  
  @ManyToOne((type) => User)
  @JoinColumn({
    name: 'userId',
  })
  public user: User;

  @Column()
  public action: string;

  @Column()
  public status: string;

  @Column()
  public voteId: number;

  @ManyToOne((type) => Vote, (vote) => vote.voteInstances)
  public vote: Vote;
};
