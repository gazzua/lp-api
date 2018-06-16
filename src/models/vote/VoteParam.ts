export default class VoteParam {
  public targetType: string;
  public targetId: string;
  public userId: number;

  constructor({
    targetType,
    targetId,
    userId,
  }: {
    targetType: string;
    targetId: string;
    userId: number;
  }) {
    this.targetType = targetType;
    this.targetId = targetId;
    this.userId = userId;
  }
};
