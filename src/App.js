import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';
import Home from './Home';
import AddressBook from './AddressBook';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <header className='app-header'>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/address-book'>List</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" component={Breadcrumbs} />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/address-book" component={AddressBook} />
                </Switch>
            </div>
        );
    }
}

export default App;
