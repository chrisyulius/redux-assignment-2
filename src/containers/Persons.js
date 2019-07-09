import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeletedHandler(person.id)} 
                       />
                ))}
            </div>
        );
    }
}

const mapStateToProp = state =>{
    return {
        prs: state.persons
    }
}

const mapDispatchToProp = dispatch => {
    return {
        onPersonAddedHandler: () => dispatch({ type: 'PERSON_ADD' }),
        onPersonDeletedHandler: (id) => dispatch({ type: 'PERSON_DELETE', personId:id })
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(Persons);