import React from 'react';
import { People } from './data/People';

export default class Home extends React.Component {
    constructor({
        match, location, history, staticContext
    }) {
        super(...arguments)
    }

    render() {
        let id = parseFloat(this.props.match.params.id)
        let personData = People.getPersonByID(id)
        if (personData) {
            return <h3>Person - {personData.name}</h3>
        } else {
            return <i>A person with id {id} does not exist.</i>
        }
    }
}