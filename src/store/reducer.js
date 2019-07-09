
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    if(action.type==='PERSON_ADD'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        return {...state, persons:state.persons.concat(newPerson)};
    }

    if(action.type==='PERSON_DELETE'){
        const updatePerson=state.persons.filter(person =>person.id!==action.personId);
        return {...state, persons:updatePerson};
    }
    
    return state;
}

export default reducer;