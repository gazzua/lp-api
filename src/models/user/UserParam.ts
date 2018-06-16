export default class UserParam {
  email: string;
  password: string;
  username?: string;

  constructor({
    email,
    password,
    username,
  }: {
    email: string,
    password: string,
    username?,
  }) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
};
