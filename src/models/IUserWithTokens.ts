import type {ITokenPair} from "./ITokenPair.ts";

export interface IUserWithTokens extends ITokenPair{
    id:        number;
    username:  string;
    email:     string;
    firstName: string;
    lastName:  string;
    gender:    string;
    image:     string;
}