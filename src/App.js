import React, { Component } from 'react';
import CardList from './CardList';
import { boruvkas } from './boruvkas';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            boruvkas: boruvkas,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filterBoruvkas = this.state.boruvkas.filter(boruvkas => {
            return boruvkas.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        const searchPerformed = this.state.searchfield.trim().length >= 2;

        return (
            <div className='tc'>
                <h1 className='f1'>VOVUVKA'S WISDOM</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList boruvkas={filterBoruvkas} searchPerformed={searchPerformed} />
            </div>
        );
    }
}

export default App;