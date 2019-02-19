const initialState = {
    repo: [],
    user: []
}

const UPDATE_REPO = "UPDATE_REPO";

export const updateRepo = (obj) => {
    return {
        type: UPDATE_REPO,
        payload: obj
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_REPO:
            return {repo: action.payload, user: action.payload[0].owner}
            default: return state
    }
}