const initialState = {
    repo: []
}

const UPDATE_REPO = "UPDATE_REPO";

export const updateRepo = (obj) => {
    console.log(obj)
    return {
        type: UPDATE_REPO,
        payload: obj
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_REPO:
            return {repo: action.payload}
            default: return state
    }
}