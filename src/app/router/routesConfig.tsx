import { lazy, type ComponentType, type ElementType } from 'react';

import HomePage from '@/pages/home/index';
import { LoginSuspensePage } from '@/pages/login/SuspensePage';
import { NotificationsSuspensePage } from '@/pages/notifications/SuspensePage';
import { ProfileSuspensePage } from '@/pages/profile/SuspensePage';
import { RankingSuspensePage } from '@/pages/ranking/SuspensePage';
import { RegisterSuspensePage } from '@/pages/register/SuspensePage';
import { RulesSuspensePage } from '@/pages/rules/SuspensePage';
import { StatisticsSuspensePage } from '@/pages/statistics/SuspensePage';

const LoginPage = lazy(async () => {
  const module = await import('@/pages/login/LoginPage');
  return { default: module.LoginPage };
});

const RegisterPage = lazy(async () => {
  const module = await import('@/pages/register/RegisterPage');
  return { default: module.RegisterPage };
});

const NotificationsPage = lazy(async () => {
  const module = await import('@/pages/notifications/NotificationsPage');
  return { default: module.NotificationsPage };
});

const ProfilePage = lazy(async () => {
  const module = await import('@/pages/profile/ProfilePage');
  return { default: module.ProfilePage };
});

const RulesPage = lazy(async () => {
  const module = await import('@/pages/rules/RulesPage');
  return { default: module.RulesPage };
});

const RankingPage = lazy(async () => {
  const module = await import('@/pages/ranking/RankingPage');
  return { default: module.RankingPage };
});

const StatisticsPage = lazy(async () => {
  const module = await import('@/pages/statistics/StatisticsPage');
  return { default: module.StatisticsPage };
});

export type RouteAccess = 'public' | 'protected';

export type AppRouteConfig = {
  path: string;
  access: RouteAccess;
  Page: ElementType;
  SuspensePage?: ComponentType;
};

export const routesConfig: AppRouteConfig[] = [
  {
    path: '/login',
    access: 'public',
    Page: LoginPage,
    SuspensePage: LoginSuspensePage,
  },
  {
    path: '/register',
    access: 'public',
    Page: RegisterPage,
    SuspensePage: RegisterSuspensePage,
  },
  {
    path: '/',
    access: 'protected',
    Page: HomePage,
  },
  {
    path: '/notifications',
    access: 'protected',
    Page: NotificationsPage,
    SuspensePage: NotificationsSuspensePage,
  },
  {
    path: '/profile',
    access: 'protected',
    Page: ProfilePage,
    SuspensePage: ProfileSuspensePage,
  },
  {
    path: '/rules',
    access: 'protected',
    Page: RulesPage,
    SuspensePage: RulesSuspensePage,
  },
  {
    path: '/ranking',
    access: 'protected',
    Page: RankingPage,
    SuspensePage: RankingSuspensePage,
  },
  {
    path: '/statistics',
    access: 'protected',
    Page: StatisticsPage,
    SuspensePage: StatisticsSuspensePage,
  },
];
