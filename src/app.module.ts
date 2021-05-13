import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {RolesModule} from './roles/roles.module';
import {AuthModule} from './auth/auth.module';

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
      models: [],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ]
})
export class AppModule {
}
