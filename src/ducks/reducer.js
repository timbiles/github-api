const initialState = {
    name: 'timbiles',
    repo: [],
    user: []
}

const UPDATE_REPO = "UPDATE_REPO";
const UPDATE_NAME = 'UPDATE_NAME'

export const updateRepo = (obj) => {
    return {
        type: UPDATE_REPO,
        payload: obj
    }
}

export const updateName = (name) => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_REPO:
            return {...state, repo: action.payload, user: action.payload[0].owner};
        case UPDATE_NAME:
            return {...state, name: action.payload}
        default: return state
    }
}