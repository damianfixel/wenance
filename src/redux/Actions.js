import { getPeople } from '../services/peopleServices'

export const DELETE_USER = 'DELETE_USER'
export const INFO_OK = 'INFO_OK'
export const INFO_ERROR = 'INFO_ERROR'
export const LOADING_ON = 'LOADING_ON'
export const LOADING_OFF = 'LOADING_OFF'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'

export function loadingOn() {
    return function (dispatch) {
        dispatch({ type: LOADING_ON })
    }
}

export function loadingOff() {
    return function (dispatch) {
        dispatch({ type: LOADING_OFF })
    }
}

export function actionToTest(value){
    return function (dispatch) {
        dispatch({ type: HANDLE_CHANGE, value: value })
    }

}


export function deleteUser(value) {
    return function (dispatch, getState) {

        const users = getState().people;
        const newUsers = users.results.filter(user => user.name !== value);
        
        dispatch({ type: DELETE_USER, value: newUsers })
    }
}

export function getPeopleAction() {
    return async function (dispatch, getState) {
        const page = getState().actualPage
        const { data, error } = await getPeople(page)
        // remember to see AxiosConfig to understand who is who
        if (data) {
            // Do some stuff with data and (almost always) dispatch actions
            dispatch({
                type: INFO_OK,
                value: data
            })
        } else {
            // handle the error
            dispatch({
                type: INFO_ERROR,
                value: error
            })
        }
    }
}
