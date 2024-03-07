import { Address } from "./address";

export class User {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  admin: boolean;
  addresses: Address[];

  constructor() {
    this.userId = "";
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.admin = false;
    this.addresses = [];
  }
}