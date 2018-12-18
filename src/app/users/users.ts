import { Addresses } from './../address/Addresses';

export class Users {
  public name: string;
  public email: string;
  public password: string;
  public address: Addresses;

  constructor () {
    this.address = new Addresses();
  }
}
