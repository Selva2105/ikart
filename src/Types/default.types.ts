export type InputType = 'text' | 'password' | 'email' | 'number' | 'textarea';

export interface PhoneNumber {
    CountryCode: string;
    Number: string;
    _id: string;
}

export interface User {
    _id: string;
    userName: string;
    email: string;
    phoneNumber: PhoneNumber;
    dob: string;
    role: string;
    verified: boolean;
    lastUpdate: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    userVerifyToken: string;
    userVerifyTokenExpire: string;
}