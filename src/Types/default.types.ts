export type InputType = "text" | "password" | "email" | "number" | "textarea";

export interface PhoneNumber {
  CountryCode: string;
  Number: string;
  _id: string;
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  phoneNumber: {
    CountryCode: string;
    Number: string;
    _id: string;
  };
  dob: string;
  role: string;
  verified: boolean;
  lastUpdate: string;
  profileImage:string;
  cart: [
    {
      product: string;
      size: string;
      price: number;
      count: number;
      _id: string;
    }
  ];
  wishlist: [
    {
      product: string;
      _id: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
  __v: number;
  userVerifyToken: string;
  userVerifyTokenExpire: string;
  policyStatus: boolean;
}
