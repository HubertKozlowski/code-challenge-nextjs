import React from 'react';
import { Logo } from '@/atoms/Logo';
import styles from './Header.module.sass'
import Link from 'next/link';
import { routes } from '@/basics/constants/routing';

export const Header: React.FC= () => {
  return (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo type='core'/>
      <Link className={styles.link} href={routes.home.path}>{routes.home.label}</Link>
      <Link className={styles.link} href={routes.articles.path}>{routes.articles.label}</Link>
    </div>
  </header>
  )
}