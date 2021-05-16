import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {RolesModule} from './roles/roles.module';
import {AuthModule} from './auth/auth.module';
import {User} from "./users/users.model";
import {Role} from "./roles/roles.model";
import { ConfiguratorModule } from './configurator/configurator.module';
import { ComponentsModule } from './components/components.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.SQL_HOST,
      port: Number(process.env.SQL_PORT),
      username: process.env.SQL_NAME,
      password: process.env.SQL_PASS,
      database: process.env.SQL_DB,
      models: [User, Role],
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ConfiguratorModule,
    ComponentsModule,
  ]
})
export class AppModule {
}
