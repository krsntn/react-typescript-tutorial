import React, { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lebron James',
      age: 32,
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to stay8ing on the same team.',
    },
  ]);

  return (
    <div className="App">
      <h1>Peoople Invited to My Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
