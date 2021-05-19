import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {RolesModule} from 'src/roles/roles.module';
import {User} from "./users.model";
import {AuthModule} from "../auth/auth.module";
import {ConfiguratorModule} from "../configurator/configurator.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
    RolesModule,
    forwardRef(() => AuthModule),
    forwardRef(() => ConfiguratorModule)
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {
}
