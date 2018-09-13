import React from 'react';
import { Route, Switch } from "react-router-dom";
import Person from './Person';
import { Link } from "react-router-dom";

export default class AddressBook extends React.Component {
    render() {
        return (<React.Fragment>
            <h1>List</h1>
            <ul>
                {/* {
                    Person.people
                } */}
                <li><Link to='/address-book/0'>Matt</Link></li>
                <li><Link to='/address-book/1'>James</Link></li>
            </ul>

            <Switch>
                <Route path='/address-book/:id' component={Person} />
            </Switch>
        </React.Fragment>)
    }
}