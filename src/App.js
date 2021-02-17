import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import PokemonPage from './PokemonPage.js';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage.js';
import Header from './Header.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/pokemon" 
                            exact
                            component={PokemonPage} 
                        />
                        <Route 
                            path="/:pokemonName" 
                            exact
                            component= {DetailPage} 
                        />
                    </Switch>
                </Router>
                <footer>
                    
                </footer>
            </div>
        )
    }
}