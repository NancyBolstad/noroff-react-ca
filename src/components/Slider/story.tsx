import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './';
import { Root, Result } from '../../types/data';

let cards: Result[];

async function getAllCards() {
  const API_BASE_URL: string = 'https://api.rawg.io/api/games';
  console.log(11111111);
  try {
    console.log(22222222);
    const response = await fetch(API_BASE_URL);
    const data: Root = await response.json();
    cards = data.results.slice(1, 5);
    console.log(cards);

    return data;
  } catch (err) {
    throw err;
  }
}

getAllCards();

storiesOf('Component/Slider', module).add('Default', () => <Slider slides={cards} />);
