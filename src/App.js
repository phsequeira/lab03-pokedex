import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import PokemonPage from './PokemonPage.js';
import HomePage from './HomePage.js';
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
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon" 
                            exact
                            render={(routerProps) => <PokemonPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
                <footer>
                    
                </footer>
            </div>
        )
    }
}