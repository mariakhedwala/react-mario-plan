export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => { //when we use thunk we can return a function
        // make async call to db
        // console.log(getState(), 'asasa');
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        // console.log('in create project', getState().firebase.profile);

        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date()
            })
            .then(() => {
                console.log("project created");
                dispatch({type: 'CREATE_PROJECT', project});
            })
            .catch((error) => {
                console.log("Error in dispa: " + error);
                dispatch({type: 'CREATE_PROJECT_ERROR', error})
            })
    }
};
