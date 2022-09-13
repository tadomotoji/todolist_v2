import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB } from './constants'


export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const arr = [...state.jobs]
            arr.splice(action.payload, 1)
            return {
                ...state,
                jobs: arr
            }
        case EDIT_JOB:

        default:
            throw new Error('invalid')
    }
}

export default reducer