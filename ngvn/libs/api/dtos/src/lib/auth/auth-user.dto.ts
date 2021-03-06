import { BaseDto } from '@ngvn/api/common';
import { AutoMap } from 'nestjsx-automapper';
import { PermissionDto } from './permission.dto';

export class AuthUserDto extends BaseDto {
  @AutoMap()
  email: string;
  permissions: PermissionDto[];
}
