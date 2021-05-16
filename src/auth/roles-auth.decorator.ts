import {SetMetadata} from "@nestjs/common";

export let roles_key = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(roles_key, roles);

