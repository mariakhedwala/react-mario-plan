const initState = {
    projects: [
        {id: '1', title:'open the book', content:'dummy data dummy'},
        {id: '2', title:'goto sleep', content:'dummy data dummy'},
        {id: '3', title:'eat tasty food', content:'dummy data dummy'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' : 
            console.log('Created Project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR' :
            console.log('Create project error', action.err);
            return state;
        default :
            return state;
    }
    return state
}

export default projectReducer