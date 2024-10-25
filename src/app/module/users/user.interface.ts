/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser extends Document {
  name: string;
  email?: string;
  mobile: number;
  profileImg: string;
  password: string;
  passwordChangedAt?: Date;
  role: 'superAdmin' | 'admin' | 'user';
  status: 'active' | 'inactive';
  isDeleted: boolean;
  address?: {
    address: string;
    city: string;
    state: string;
    postal: number;
    country: 'Bangladesh';
  };
  isMobileVefify?: boolean;
  isEmailVefify?: boolean;
  kyc?: boolean;
}
export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
