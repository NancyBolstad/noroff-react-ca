import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './';
import { Root, Result } from '../../types/data';

let list: Result[];

async function getAllCards() {
  const API_BASE_URL: string = 'https://api.rawg.io/api/games';
  console.log(11111111);
  try {
    console.log(22222222);
    const response = await fetch(API_BASE_URL);
    const data: Root = await response.json();
    list = data.results;
    console.log(list)

    return data;
  } catch (err) {
    throw err;
  }
}

getAllCards();

storiesOf('Component/CardsList', module).add('Default', () => <CardsList cards={list} />);