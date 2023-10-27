import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { Routes } from '@nestjs/core';

const routes: Routes = [
  {
    path: '/admin',
    children: [
      {
        path: '/auth',
        module: AuthModule,
      },
    ],
  },
];

@Module({
  imports: [AuthModule],
  providers: [],
})
export class AdminModule {}
