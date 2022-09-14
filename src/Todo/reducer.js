import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB, SET_SELECTED } from './constants'


export const initState = {
    job: '',
    selected: -1,
    jobs: JSON.parse(localStorage.getItem('jobsList'))||[]
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
        case DELETE_JOB: {
            const arr = [...state.jobs]
            arr.splice(action.payload, 1)
            return {
                ...state,
                jobs: arr
            }
        }
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        case EDIT_JOB:
            {
                const arr = [...state.jobs]
                arr[action.payload.index] = action.payload.value;
                return {
                    ...state,
                    jobs: arr
                }
            }
        default:
            throw new Error('invalid')
    }
}

export default reducer