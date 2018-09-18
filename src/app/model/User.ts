export interface User {
  id: number;
  name: string;
  username: string;
  address: Address;
  phone: string;
  website: string;
  company: {name: string, catchPhrase: string, bs: string };
}
export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {lat: string, lng: string};
}
