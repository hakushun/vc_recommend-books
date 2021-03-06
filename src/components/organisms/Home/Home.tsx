import React from 'react';
import { BookList } from '../../molecules/BookList';
import { InternalBookSearch } from '../../molecules/InternalBookSearch';
import { SortSelectBox } from '../../molecules/SortSelectBox';
import { SwitchLayout } from '../../molecules/SwitchLayout';
import { TagFilter } from '../../molecules/TagFilter';
import styles from './index.module.scss';

export const Home: React.VFC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>みんなが読んだ/読みたい本</h2>
    <InternalBookSearch />
    <TagFilter />
    <SwitchLayout />
    <SortSelectBox />
    <BookList />
  </section>
);
