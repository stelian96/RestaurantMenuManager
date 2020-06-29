export interface UserCallback {
  (user: User): void;
}

export type IdType = string;

export interface Indentifiable {
  id: IdType;
}

export interface IUser extends Indentifiable {
  userName: string;
  fullName: string;
  password: string;
  email: string;
  phone: string;
  adress: string;
  isAdmin?: boolean;
}

export class User implements IUser {
  constructor(
    public id: IdType,
    public userName: string,
    public fullName: string,
    public password: string,
    public email: string,
    public phone: string,
    public adress: string,
    public isAdmin?: boolean,
  ) {}
}
export interface IMenu extends Indentifiable {
  category: string;
  imageUrl: string;
  foodName: string;
  description: string;
  price: string;
}

export class Menu implements IMenu {
  constructor(
    public id: IdType,
    public category: string,
    public imageUrl: string,
    public foodName: string,
    public description: string,
    public price: string
  ) {}
}
