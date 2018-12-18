import { States } from './../states/states';

export class Addresses {

  public zipcode: string;
  public city: string;
  public publicplace: string;
  public neighborhood: string;
  public number: number;
  public state: States;

  constructor() {
    this.state = new States;
  }
}
