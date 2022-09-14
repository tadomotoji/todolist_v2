import { SET_JOB, ADD_JOB, DELETE_JOB, SET_SELECTED, EDIT_JOB } from './constants'

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

export const setSelected = payload => {
    return {
        type: SET_SELECTED,
        payload
    }
}

export const editJob = payload => {
    return {
        type: EDIT_JOB,
        payload
    }
}