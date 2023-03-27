import { RoutingPath } from "../types/routing";

type MainPages = 'home' | 'articles'

export const routes: Record<MainPages, RoutingPath> = {
  home: {
    path: '/',
    label: 'Home'
  },
  articles: {
    path: '/articles',
    label: 'Articles'
  }
}