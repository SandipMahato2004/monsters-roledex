import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-componets';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '', // Initialize as an empty string
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    
    // Correct filtering logic
    const filteredMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) // Fixing toLowerCase
    );

    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox  placeholder="search monster"  changeHandler={ e =>this.setState({ searchField: e.target.value })}  />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
