import { UserFishInterFace } from '../Interfaces/UserFish.interface';
import { UserQuestionInterface } from '../Interfaces/UserQuestions.interface';

export class UserModel {
  public id: string;
  public Username: string;
  public Email: string;
  public Questions: UserQuestionInterface[];

  constructor(
    id: string,
    Username: string,
    Email: string,
    Questions: UserQuestionInterface[]
  ) {
    this.id = id;
    this.Username = Username;
    this.Email = Email;
    this.Questions = Questions;
  }
}
